import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { Jedi } from './model/jedi';
import { Todo } from './model/todo';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('getting jedi from server')
  }


  public title = 'Starwars';
  public kleur = 'red';

  @ViewChild(JediListComponent)
  private jediListComponent: JediListComponent | undefined;

  setKleur(kleurInput: HTMLInputElement) {
    this.kleur = kleurInput.value;
    console.log('set kleur', this.kleur);
  }
  allJedis: Jedi[] = [
    { name: 'Qui-Gon Jinn', midichlorian: 10000 },
    { name: 'Yaddle', midichlorian: 11300 },
    { name: 'Yoda', midichlorian: undefined },
  ];

  addToAllJedi(newJedi: Jedi){
    this.allJedis.push(newJedi);
  }

  selectedJedi: Jedi | undefined;

  next() {
    this.selectedJedi = this.allJedis[0];
    this.jediListComponent?.selectJedi(this.selectedJedi);
  }

  previous() {

  }
}
