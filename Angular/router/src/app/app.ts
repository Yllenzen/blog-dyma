import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1 class="mb-20">Root component</h1>
    <nav class="flex gap-16 mb-20">
      <li>
        <a
          routerLinkActive="active-item"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLink="/"
          >Homepage</a
        >
      </li>
      <li>
        <a routerLinkActive="active-item" routerLink="/users">Users</a>
      </li>
      <li (click)="navigateToUsers()">Je suis un faux lien</li>
    </nav>
    <router-outlet />
  `,
})
export class App {
  private router = inject(Router);
  private events = toSignal(this.router.events);

  constructor() {
    effect(() => {
      console.log({ events: this.events() });
    });

    this.router.events.subscribe((event) => {
      console.log('from obs:', event);
    });
  }

  navigateToUsers() {
    console.log(this.router);
    this.router.navigate(['users'], {
      queryParams: {
        id: '1',
        name: 'Louis',
      },
      fragment: 'frag',
    });
    // this.router.navigateByUrl('users');
  }
}
