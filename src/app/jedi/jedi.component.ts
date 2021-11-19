import { Component, OnInit, ViewChild } from '@angular/core';
import { JediListComponent } from '../jedi-list/jedi-list.component';
import { Jedi } from '../model/jedi';
import { JediService } from '../services/jedi.service';

@Component({
  selector: 'sw-jedi',
  templateUrl: './jedi.component.html',
  styleUrls: ['./jedi.component.scss']
})
export class JediComponent implements OnInit {

  constructor(private jediService: JediService) {}

  async ngOnInit(): Promise<void> {
    console.log('getting jedi from server');
    this.allJedis = await this.jediService.getJedis();
  }

  public title = 'Starwars';
  public kleur = 'red';

  @ViewChild(JediListComponent)
  private jediListComponent: JediListComponent | undefined;

  setKleur(kleurInput: HTMLInputElement) {
    this.kleur = kleurInput.value;
    console.log('set kleur', this.kleur);
  }
  allJedis: Jedi[] | undefined;

  async saveJedi(newJedi: Jedi) {
    const jediAdded = await this.jediService.addJedi(newJedi);
    this.allJedis?.push(jediAdded);
  }

  selectedJedi: Jedi | undefined;

  next() {
    this.selectedJedi = this.allJedis?.[0];
    if (this.selectedJedi) {
      this.jediListComponent?.selectJedi(this.selectedJedi);
    }
  }
}
