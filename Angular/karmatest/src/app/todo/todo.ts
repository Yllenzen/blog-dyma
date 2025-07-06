import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todoContent = input<string>();
  emitToggle = output<string>();

  toggleTodo() {
    this.emitToggle.emit(this.todoContent()!);
  }
}
