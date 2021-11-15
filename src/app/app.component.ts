import { Component } from '@angular/core';
import { Jedi } from './model/jedi';
import { Todo } from './model/todo';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'world';
  public kleur = 'red';

  public newTitle: string = '';

  public ariaLabel = '';

  public todos: Todo[] = [
    {
      title: 'Stofzuigen',
      due: new Date(2021, 10, 20),
    },
    {
      title: 'Angular dag 1',
      due: new Date(2021, 10, 15),
    },
  ];

  setKleur(kleurInput: HTMLInputElement) {
    this.kleur = kleurInput.value;
    console.log('set kleur', this.kleur);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf({
      title: 'Koken',
      due: new Date(2021, 10, 15),
    });
    if (index !== -1) {
      this.todos.splice(index, 1);
    } else {
      console.log('Not found', index);
    }
  }
  kolomSpan = 2;

  klassen: string[] = [];
  newClass = '';
  addClass() {
    this.klassen.push(this.newClass);
  }

  isDueToday(todo: Todo) {
    return (
      todo.due.valueOf() <
      new Date().setDate(new Date().getDate() + 1).valueOf()
    );
  }

  showText = true;
  toggle() {
    this.showText = !this.showText;
  }

  addTodo() {
    const newTodo: Todo = {
      title: this.newTitle,
      due: new Date(2021, 10, 15),
    };
    this.todos.push(newTodo);
    this.newTitle = '';
  }

  jedis: Jedi[] = [
    new Jedi('Qui-Gon Jinn', 10000),
    new Jedi('Yaddle', 11300),
    new Jedi('Yoda', 17700.8),
  ];
}
