import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Jedi } from '../model/jedi';

@Component({
  selector: 'sw-add-jedi',
  templateUrl: './add-jedi.component.html',
  styleUrls: ['./add-jedi.component.scss']
})
export class AddJediComponent implements OnInit {

  constructor(formBuilder: FormBuilder) {
    this.addJediForm = formBuilder.group({
      name: ['', [Validators.required] ],
      midichlorian: new FormControl(0, [Validators.min(10), Validators.max(20000)])
    });
   }

  ngOnInit(): void {
  }

  @Output()
  public jediAdd = new EventEmitter<Jedi>();

  // public addJediForm = new FormGroup(
  //   {
  //     name: new FormControl('', [Validators.required] ),
  //     midichlorian: new FormControl(0, [Validators.min(10), Validators.max(20000)])
  //   }
  // );
  public addJediForm: FormGroup;

  public addJedi() {
    console.log('Jedi: ', this.addJediForm.value);
    this.jediAdd.emit(this.addJediForm.value);
    this.addJediForm.reset();
  }
}
