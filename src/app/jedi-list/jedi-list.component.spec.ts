import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JediMasterPipe } from '../pipes/jedi-master.pipe';
import { MidichlorianPipe } from '../pipes/midichlorian.pipe';

import { JediListComponent } from './jedi-list.component';

describe('jedi-list component', () => {

  let sut:ComponentFixture<JediListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [
        MidichlorianPipe,
        JediMasterPipe,
        JediListComponent]
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
    sut.componentInstance.jedis = [{ name: 'Yoda', midichlorian: 17800}];
    sut.detectChanges();
    await sut.whenStable();

    // Assert
    const tableRows = element.querySelectorAll<HTMLElement>('tr.jedi');
    expect(tableRows.length).toBe(1);
    const jediNameTableData = tableRows.item(0).querySelector<HTMLElement>('td:first-child');
    const jediMidichlorianTableData = tableRows.item(0).querySelector<HTMLElement>('td:nth-child(2)');
    expect(jediNameTableData!.innerText).toEqual('Master Yoda')
    expect(jediMidichlorianTableData!.innerText).toEqual('17800 midichlorians')
  });

  
});
