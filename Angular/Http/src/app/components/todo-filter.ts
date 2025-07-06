import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-filter',
  imports: [FormsModule],
  template: `
    <input
      type="text"
      [(ngModel)]="filter"
      class="border py-6"
      placeholder="Rechercher une tâche"
    />
  `,
  styles: `
  input {
    margin-bottom: 12px;
  }
  `,
})
export class TodoFilter {
  filter = model<string>('');
}
