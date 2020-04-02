import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
// later: pure: false for apply pipe in every data changes
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string, property: string): unknown {
    if (value.length === 0 || filterStatus === '') {
      return value;
    } else {
      const resultArray = [];
      for (const item of value) {
        if (item[property] === filterStatus) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }

}
