import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {
  title = inject(Title);
  meta = inject(Meta);

  constructor() {
    this.title.setTitle('Je suis la page B');
    this.meta.addTag({
      property: 'og:title',
      content:
        'test - Définition, synonymes, prononciation, exemples | Dico en ligne Le Robert',
    });
  }
}
