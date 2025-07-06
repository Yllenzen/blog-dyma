import {
  Directive,
  inject,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class InpuDirective {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  constructor() {
    console.log(this.templateRef);
    console.log(this.viewContainerRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $hello: 'world',
    });
  }
}
