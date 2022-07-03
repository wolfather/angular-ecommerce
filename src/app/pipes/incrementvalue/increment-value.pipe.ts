import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'incrementValue'})
export class IncrementValuePipe implements PipeTransform {
  transform(value: number): number {
    return (value+1);
  }
}