import { Component, inject } from '@angular/core';
import { ChosesService } from '../shared/services/choses.service';

@Component({
  selector: 'app-list',
  imports: [],
  template: `
    <ul>
      @for (chose of choses(); track $index) {
      <li (click)="remove($index)">{{ chose }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class List {
  choseService = inject(ChosesService);
  choses = this.choseService.choses;
  remove(index: number) {
    this.choseService.remove(index);
  }
}
