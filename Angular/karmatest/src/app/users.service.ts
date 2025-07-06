import { Injectable, resource } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersResource = resource({
    async loader() {
      return (await fetch('https://restapi.fr/api/users')).json();
    },
  });
}
