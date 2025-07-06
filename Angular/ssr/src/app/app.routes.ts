import { Routes } from '@angular/router';
import { B } from './b/b';
import { A } from './a/a';

export const routes: Routes = [
  {
    path: 'b',
    component: B,
  },
  {
    path: '',
    component: A,
    title: 'Page A',
  },
];
