import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Jedi } from '../model/jedi';
import { JediMasterPipe } from '../pipes/jedi-master.pipe';
import { MidichlorianPipe } from '../pipes/midichlorian.pipe';

import { JediListComponent } from './jedi-list.component';

describe('jedi-list component', () => {
  let sut: ComponentFixture<JediListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [MidichlorianPipe, JediMasterPipe, JediListComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
    sut = TestBed.createComponent(JediListComponent);
    element = sut.nativeElement;
  });

  it('should show an empty list', async () => {
    // Act
    const tableRows = element.querySelectorAll('tr.jedi');

    // Assert
    expect(tableRows.length).toBe(0);
  });

  it('should show a single jedi when the jedis has 1 jedi', async () => {
    // Act
    await setJedis([{ name: 'Yoda', midichlorian: 17800 }]);

    // Assert
    const tableRows = element.querySelectorAll<HTMLElement>('tr.jedi');
    expect(tableRows.length).toBe(1);
    const jediNameTableData = tableRows
      .item(0)
      .querySelector<HTMLElement>('td:first-child');
    const jediMidichlorianTableData = tableRows
      .item(0)
      .querySelector<HTMLElement>('td:nth-child(2)');
    expect(jediNameTableData!.innerText).toEqual('Master Yoda');
    expect(jediMidichlorianTableData!.innerText).toEqual('17800 midichlorians');
  });

  describe('with 3 jedis', () => {
    beforeEach(async () => {
      await setJedis([
        { name: 'Yoda', midichlorian: 17800 },
        { name: 'Luke', midichlorian: 14500 },
        { name: 'Obi-Wan', midichlorian: 13400 },
      ]);
    });

    it('should show an input when the edit button is clicked', async () => {
      // Arrange
      const editJediButton = element.querySelector<HTMLElement>('tr.jedi:nth-child(2) .sw-edit-jedi');

      // Act
      editJediButton!.click();
      sut.detectChanges();
      await sut.whenStable();

      // Assert
      const input = element.querySelector<HTMLInputElement>('tr.jedi:nth-child(2) input[name="jediNameInput"]')
      expect(input).toBeDefined();
      expect(input!.value).toEqual('Luke');
    });

    it('should allow to edit a jedi using the edit button', async () => {
      // Arrange
      const editJediButton = element.querySelector<HTMLElement>('tr.jedi:nth-child(2) .sw-edit-jedi')!;
      editJediButton!.click();
      sut.detectChanges();
      await sut.whenStable();
      const input = element.querySelector<HTMLInputElement>('tr.jedi:nth-child(2) input[name="jediNameInput"]')!;

      // Act
      input.value = 'Anakin';
      // This event is needed to signal "ngModel" that a change was made and to be reflected back to the model
      // Also see https://medium.com/@sevcsik/testing-ngmodel-in-angular-2-d9c79923f973
      input.dispatchEvent(new Event('input'));
      sut.detectChanges();
      await sut.whenStable();
      editJediButton.click();
      sut.detectChanges();
      await sut.whenStable();
      const jediNameTableData = element.querySelector<HTMLElement>('tr.jedi:nth-child(2) td:first-child');

      // Assert
      expect(jediNameTableData).toBeDefined();
      expect(jediNameTableData!.innerText).toEqual('Master Anakin');
    });
  });
  async function setJedis(jedis: Jedi[]) {
    sut.componentInstance.jedis = jedis;
    sut.componentInstance.ngOnChanges({
      jedis: new SimpleChange('', '', true)
    });
    sut.detectChanges();
    await sut.whenStable();
  }
});

