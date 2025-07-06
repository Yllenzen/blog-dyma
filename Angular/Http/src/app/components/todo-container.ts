import { Component, computed, inject } from '@angular/core';
import { TodoForm } from './todo-form';
import { TodosList } from './todos-list';
import { Todo, TodoForms } from '../shared/interfaces';
import { TodosService } from '../shared/services/todos.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-container',
  imports: [TodoForm, TodosList, JsonPipe],
  template: `
    @if (todosIsLoading()) {
    <h2>Chargement en cours ...</h2>
    } @else {
    <app-todos-list
      (updateTodo)="updateTodo($event)"
      (selectTodo)="selectTodo($event)"
      (deleteTodo)="deleteTodo($event)"
      [todosList]="todosList()"
    />
    <pre> {{ selectedTodo() | json }} </pre>
    }
    <app-todo-form (addTodo)="addTodo($event)" />
  `,
  styles: `
  :host {
    padding: 32px;
  }
  `,
})
export class TodoContainer {
  todosService = inject(TodosService);
  todosList = computed(() => this.todosService.todosResource.value() || []);
  todosIsLoading = this.todosService.todosResource.isLoading;
  selectedTodo = this.todosService.selectedTodoResource.value;

  addTodo(todo: TodoForms) {
    this.todosService.addTodo(todo);
  }

  selectTodo(todoId: string) {
    this.todosService.selectTodo(todoId);
  }

  updateTodo(todo: Todo) {
    this.todosService.updateTodo(todo);
  }

  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId);
  }
}
