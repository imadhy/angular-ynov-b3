import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajouteZero'
})
export class AjouteZeroPipe implements PipeTransform {

  transform(value: number): string {
    if (typeof value !== 'number') {
      return;
    }

    return `${value}000`;
  }
}
