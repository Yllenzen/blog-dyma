import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  template: `
    <h2>Utilisateur</h2>
    <ul>
      @for (user of users; track user.id) {
      <li
        [routerLink]="[user.id]"
        [queryParams]="{ age: 12, city: 'Paris' }"
        fragment="Je suis le fragment"
      >
        {{ user.name }}
      </li>
      }
    </ul>
    <strong>awswer: {{ answer() }}</strong>
  `,
  styles: ``,
})
export class Users {
  activatedRoute = inject(ActivatedRoute);
  data = toSignal(this.activatedRoute.data);
  answer = computed(() => this.data()?.['answer']);

  users = [
    {
      id: '1',
      name: 'Louna',
      age: 22,
    },
    {
      id: '2',
      name: 'Lola',
      age: 35,
    },
    {
      id: '3',
      name: 'Poupou',
      age: 44,
    },
  ];
}
