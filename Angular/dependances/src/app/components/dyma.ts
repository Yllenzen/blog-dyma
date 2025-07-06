import { Component, inject } from '@angular/core';
import { MY_CONFIG_TOKEN, MyClass } from '../shared/dummy';

@Component({
  selector: 'app-dyma',
  imports: [],
  template: ``,
  styles: ``,
})
export class Dyma {
  myclass = inject(MyClass);
  myconfig = inject(MY_CONFIG_TOKEN);

  constructor() {
    console.log(this.myclass);
    console.log(this.myconfig);
  }
}
