import { Component, computed, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, CanDeactivateFn } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  template: ` <p>user : {{ id() }}</p> `,
  styles: ``,
})
export class User {
  id = input.required<string>();
  activatedRoute = inject(ActivatedRoute);
  queryParams = toSignal(this.activatedRoute.queryParams);
  age = computed(() => this.queryParams()?.['age']);
  fragment = toSignal(this.activatedRoute.fragment);
  title = toSignal(this.activatedRoute.title);
  data = toSignal(this.activatedRoute.data);

  CanDeactivate() {
    return false;
  }

  constructor() {
    console.log(this.activatedRoute);

    effect(() => {
      console.log({
        queryParams: this.queryParams(),
        age: this.age(),
        fragment: this.fragment(),
        title: this.title(),
        data: this.data(),
      });
    });
  }
}
