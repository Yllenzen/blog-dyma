import { Component, Directive } from '@angular/core';
import { InpuDirective } from '../shared/directives/input.directive';

@Component({
  selector: 'app-dyma',
  imports: [InpuDirective],
  // template: ` <input *appInput type="text" /> `,
  template: `
    <div *appInput="let i = $hello">
      {{ i }}
      <input [value]="i" type="text" />
    </div>
    <input *appInput="false" type="text" />
  `,
  styles: ``,
})
export class Dyma {}
