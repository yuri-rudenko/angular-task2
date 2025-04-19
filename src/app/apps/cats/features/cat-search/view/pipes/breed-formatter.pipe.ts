import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breedFormatter'
})
export class BreedFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
