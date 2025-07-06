import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="card">
      <div class="title">
        <ng-content select=".title">Titre ar défaut</ng-content>
      </div>
      <div class="content"><ng-content select=".content" /></div>
    </div>
  `,
  styles: `
    .card {
      border: 1px solid #999;
      border-radius: 4px;
      padding: 16px;
    }
    .title {
      color: blue;
      font-weight:500;
    }
    .content {
      color: red;
    }
  `,
})
export class Card {}
