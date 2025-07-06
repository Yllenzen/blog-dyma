import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide',
})
export class HidePipe implements PipeTransform {
  transform(value: string, cut = 0): string {
    const hide = cut ? cut : value.length;
    return new Array(hide + 1).join('*') + value.slice(hide, value.length);
  }
}
