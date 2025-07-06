import { Injectable, signal } from '@angular/core';
import { TodoForms, Todo } from '../interfaces';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  BASE_URL = 'https://restapi.fr/api/todoshttp';

  todosResource = httpResource<Todo[]>(
    () => ({
      url: this.BASE_URL,
      method: 'GET',
      body: '',
      params: {
        delay: 1,
      },
    }),
    {
      defaultValue: [],
    }
  );

  selectedTodoId = signal<string | null>(null);

  selectedTodoResource = httpResource<Todo | undefined>(() => {
    const todoId = this.selectedTodoId();
    if (!todoId) return undefined;
    return `${this.BASE_URL}/${this.selectedTodoId}`;
  });

  constructor() {}

  selectTodo(todoId: string) {
    this.selectedTodoId.set(todoId);
  }

  async addTodo(todo: TodoForms) {
    try {
      const response = await fetch(this.BASE_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        this.todosResource.update((todos) =>
          todos ? [...todos, body] : [body]
        );
        console.log({ body });
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }
  }

  async updateTodo(todo: Todo) {
    try {
      const { _id, ...restTodo } = todo;
      const response = await fetch(`${this.BASE_URL}/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(restTodo),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        this.todosResource.update((todos) =>
          todos?.map((t) => (t._id === (body as Todo)._id ? body : t))
        );
        this.selectedTodoResource.reload();
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }
  }

  async deleteTodo(todoId: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/${todoId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        this.todosResource.update((todos) =>
          todos?.filter(({ _id }) => _id !== todoId)
        );
        if (this.selectedTodoId() === todoId) {
          this.selectedTodoId.set(null);
        }
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }
  }
}
