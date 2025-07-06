import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { HidePipe } from '../shared/pipes/hide-pipe';

@Component({
  selector: 'app-dyma',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    JsonPipe,
    CurrencyPipe,
    DatePipe,
    HidePipe,
  ],
  template: `
    <h1>{{ today | date : 'cccc d MMMM y' }}</h1>
    <h1>{{ name | uppercase }}</h1>
    <h1>{{ name | uppercase | lowercase }}</h1>
    <h1>{{ name | titlecase }}</h1>
    <h1>{{ result | number : '1.2-5' }}</h1>
    <pre>{{ user | json }}</pre>
    <h1>{{ price | currency : 'EUR' }}</h1>
    <h1>{{ password | hide : 2 }}</h1>
  `,
  styles: ``,
})
export class Dyma {
  password = '123456';
  today = new Date();
  price = 50;
  name = 'Louis';
  result = 1 / 3;
  user = {
    local: {
      email: 'test@gmail.com',
    },
    city: {
      name: 'Paris',
    },
  };
}
