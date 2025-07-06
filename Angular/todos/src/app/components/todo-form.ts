import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todos } from '../shared/interfaces';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  template: `
    <input
      type="text"
      [(ngModel)]="todoName"
      class="flex-auto border"
      placeholder="Entrer une tâche"
    />
    <button (click)="addTodoInput()" class="btn btn-primary ">Ajouter</button>
  `,
  styles: `
  :host {
    display:flex;
    gap:12px;
  }
  `,
})
export class TodoForm {
  todoName = '';
  addTodo = output<Todos>();

  addTodoInput() {
    if (this.todoName) {
      const newTodo = {
        name: this.todoName,
        done: false,
        id: '' + Math.floor(Math.random() * 1001),
      };
      this.todoName = '';
      this.addTodo.emit(newTodo);
    }
  }
}
