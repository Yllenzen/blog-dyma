import { Component, inject, ViewContainerRef } from '@angular/core';
import { A } from './a';

@Component({
  selector: 'app-dyma',
  imports: [],
  template: ` <button (click)="loadComponent()">Toggle</button> `,
  styles: `
  `,
})
export class Dyma {
  viewContainerRef = inject(ViewContainerRef);

  async loadComponent() {
    const A = await (await import('./a')).A;
    this.viewContainerRef.createComponent(A);
  }
}
