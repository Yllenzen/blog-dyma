import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
      property: 'og:title',
      content:
        'PAGE A - Définition, synonymes, prononciation, exemples | Dico en ligne Le Robert',
    });
  }
}
