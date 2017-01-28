import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const pluralize = require('pluralize');
    return pluralize(value);
  }

}
