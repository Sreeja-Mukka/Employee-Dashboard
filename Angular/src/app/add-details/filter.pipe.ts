
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
   transform(value: any, input: any): any {
    if (input) {
      return value.filter((val: string) => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
   }
}