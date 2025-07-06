import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'karmatest';
  usersService = inject(UsersService);
  users = computed(() => this.usersService.usersResource.value());
}
