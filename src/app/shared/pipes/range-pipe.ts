import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {

  transform(limit: number): number[] {
    if (limit <= 0 || isNaN(limit)) {
      return [];
    }
    return Array(limit).fill(0).map((_, i) => i);
  }
}
