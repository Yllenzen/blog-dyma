import { Component, signal } from '@angular/core';
import { TodoForm } from './todo-form';
import { TodosList } from './todos-list';
import { Todos } from '../shared/interfaces';

@Component({
  selector: 'app-todo-container',
  imports: [TodoForm, TodosList],
  template: `
    <app-todos-list
      (toggleTodo)="toggleTodo($event)"
      [todosList]="todosList()"
    />
    <app-todo-form (addTodo)="addTodo($event)" />
  `,
  styles: `
  :host {
    padding: 32px;
  }
  `,
})
export class TodoContainer {
  todosList = signal<Todos[]>([
    {
      id: '1',
      name: 'Ranger ma chambre',
      done: false,
    },
    {
      id: '2',
      name: 'Apprendre Angular',
      done: true,
    },
    {
      id: '3',
      name: 'Lire crime & châtiment',
      done: false,
    },
  ]);

  addTodo(todo: Todos) {
    this.todosList.update((todos) => [...todos, todo]);
  }

  toggleTodo(todoId: String) {
    this.todosList.update((todos) =>
      todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      })
    );
  }
}
