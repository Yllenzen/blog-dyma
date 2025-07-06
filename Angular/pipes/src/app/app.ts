import { Component } from '@angular/core';
import { Dyma } from './components/dyma';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Dyma],
})
export class App {
  protected title = 'pipes';
}
