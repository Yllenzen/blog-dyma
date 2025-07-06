import { Component, ViewEncapsulation } from '@angular/core';
import { Enfant } from './enfant';

@Component({
  selector: 'app-parent',
  imports: [Enfant],
  template: `
    <!-- <h1>Composant parent !</h1> -->

    <app-enfant />
  `,
})
export class Parent {}
