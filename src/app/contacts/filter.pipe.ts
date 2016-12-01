import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args[0] === ' ') {
      return value;
    }
    if (value.length === 0) {
      return value;
    }
    let filteredArray = [];
    for (let item of value) {
      if (item['firstName'].match('^.*' + args[0] + '.*$')) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
