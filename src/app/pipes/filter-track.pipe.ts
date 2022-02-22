import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTrack'
})
export class FilterTrackPipe implements PipeTransform {

  transform(value: any, arg: string): any[] {
    let resultadoTexto = [];
    for(let track of value){
      if(track.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultadoTexto.push(track);
      };
    };
    return resultadoTexto;
  }
}
