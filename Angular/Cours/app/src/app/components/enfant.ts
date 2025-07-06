import { Component } from '@angular/core';

@Component({
  selector: 'app-enfant',
  template: `
    <button (click)="updateActive(true)">Activer h1</button>
    <button (click)="updateActive(false)">Désactiver h1</button>
    <h1 [class.active]="isActive">Composant enfant !</h1>
  `,

  styles: `
    .active {
      color: blue;
    }
  `,
})
export class Enfant {
  isActive = false;

  updateActive(isActive: boolean) {
    this.isActive = isActive;
  }
}
