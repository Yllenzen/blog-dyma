import { Component, computed, input, output, signal } from '@angular/core';
import { TodoFilter } from './todo-filter';
import { TodoComponent } from './todo';
import { Todo } from '../shared/interfaces';

@Component({
  selector: 'app-todos-list',
  imports: [TodoComponent, TodoFilter],
  template: `
    <app-todo-filter [(filter)]="filter" />
    <p>Nombre de tâches : {{ nbrOffFilteredTodos() }}</p>
    <hr />

    <ul class="flex flex-col gap-12">
      @for (todo of filteredTodoList(); track todo._id) {
      <app-todo
        (selectTodo)="(selectTodo)"
        (updateTodo)="updateTodo.emit($event)"
        (deleteTodo)="deleteTodo.emit($event)"
        [todo]="todo"
      />
      } @empty {
      <li>Il n'y a pas de tâche à faire</li>
      }
    </ul>
  `,
  styles: `
  ul {
    margin-bottom: 12px;
  }
  `,
})
export class TodosList {
  filter = signal<string>('');
  todosList = input<Todo[]>([]);
  nbrOffFilteredTodos = computed(() => this.filteredTodoList()?.length);
  filteredTodoList = computed(() =>
    this.todosList().filter((t) => t.name.toLowerCase().includes(this.filter()))
  );
  updateTodo = output<Todo>();
  selectTodo = output<string>();
  deleteTodo = output<string>();
}
