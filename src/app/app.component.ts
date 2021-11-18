import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { Jedi } from './model/jedi';
import { Todo } from './model/todo';
import { JediService } from './services/jedi.service';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
