import { Component } from '@angular/core';
import { Dyma } from './components/dyma';
import { Form } from './components/form';
import { List } from './components/list';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Form, List],
})
export class App {}
