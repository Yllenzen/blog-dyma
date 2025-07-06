import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(text: any) {
    console.log('MY LOGGER', text);
  }
}
