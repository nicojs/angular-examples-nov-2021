import { Component, Input, OnInit } from '@angular/core';
import { Jedi } from '../model/jedi';

@Component({
  selector: 'sw-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent {

  @Input()
  jedis: Jedi[] = [];

  private jediSelected = new Set<Jedi>();
  public selectJedi(jedi: Jedi) {
    if(this.jediSelected.has(jedi)){
      this.jediSelected.delete(jedi);
    }else {
      this.jediSelected.add(jedi);
    }
  }

  public isSelected(jedi: Jedi){
    return this.jediSelected.has(jedi);
  }

  private jediInEditMode = new Set<Jedi>();
  isEdit(jedi: Jedi) {
    return this.jediInEditMode.has(jedi);
  }
  toggleEdit(jedi: Jedi) {
    if (this.jediInEditMode.has(jedi)) {
      this.jediInEditMode.delete(jedi);
    } else {
      this.jediInEditMode.add(jedi);
    }
  }
}
