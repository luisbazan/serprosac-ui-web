import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any[], filterText: string): any[] {  
    if (filter && Array.isArray(items)) {      
      let filterKeys:string[] = [];
      filter.forEach(item=> filterKeys.push(item.name));
      return items.filter(item => {
        return filterKeys.some((keyName) => {
          return new RegExp(filterText, 'gi').test(item[keyName]) || filter[keyName] === "";
        });
      });
    } else {
      return items;
    }
  }

}
