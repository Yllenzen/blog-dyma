import { Component } from '@angular/core';
import { Dyma } from './components/dyma';

@Component({
  selector: 'app-root',
  imports: [Dyma],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'directives';
}
