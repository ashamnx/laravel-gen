import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, arg1: any, arg2: any): any {
        return value.filter(item => {
            return item[arg1] == arg2;
        });
    }

}
