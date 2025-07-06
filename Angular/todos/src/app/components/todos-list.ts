import { Component, computed, input, output, signal } from '@angular/core';
import { Todo } from './todo';
import { Todos } from '../shared/interfaces';
import { TodoFilter } from './todo-filter';

@Component({
  selector: 'app-todos-list',
  imports: [Todo, TodoFilter],
  template: `
    <app-todo-filter [(filter)]="filter" />
    <p>Nombre de tâches : {{ nbrOffFilteredTodos() }}</p>
    <hr />

    <ul class="flex flex-col gap-12">
      @for (todo of filteredTodoList(); track todo.id) {
      <app-todo (toggleTodo)="toggleTodo.emit($event)" [todo]="todo" />
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
  /* mytodos = input<Todos[]>([], { alias: 'todosList' }); */
  filter = signal<string>('');
  todosList = input<Todos[]>([]);
  nbrOffFilteredTodos = computed(() => this.filteredTodoList()?.length);
  filteredTodoList = computed(() =>
    this.todosList().filter((t) => t.name.toLowerCase().includes(this.filter()))
  );
  toggleTodo = output<String>();
}
