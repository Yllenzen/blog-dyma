import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChosesService } from '../shared/services/choses.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  template: `
    <input type="text" [(ngModel)]="chose" />
    <button (click)="add()">Ajouter</button>
  `,
  styles: ``,
})
export class Form {
  chose = '';
  chosesService = inject(ChosesService);

  add() {
    this.chosesService.add(this.chose);
  }
}
