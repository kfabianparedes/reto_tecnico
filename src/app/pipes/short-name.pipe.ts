import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string): unknown {
    value.length == 0?
    value = 'Usuario':
    value = value.split(' ')[0].concat(' ',value.split(' ')[1][0],'.');
    return value;
  }

}
