import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Jedi } from '../model/jedi';
import { JediService } from '../services/jedi.service';

@Component({
  selector: 'sw-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss'],
})
export class JediListComponent implements OnInit {

  public searchForm = new FormGroup({
    search: new FormControl('')
  })

  constructor(service: JediService){
    console.log(service);
  }

  public ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((value: { search: string }) => {
      console.log(value);
      this.jedisFiltered = this.jedis?.filter(jedi => jedi.name.includes(value.search));
    });
  }

  jedisFiltered: Jedi[] | undefined;

  @Input()
  jedis: Jedi[] | undefined;

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
