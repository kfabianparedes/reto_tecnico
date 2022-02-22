import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAlbum'
})
export class FilterAlbumPipe implements PipeTransform {

  transform(value: any, arg: string): any[] {
    let resultadoTexto = [];
    for(let album of value){
      if(album.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultadoTexto.push(album);
      };
    };
    return resultadoTexto;
  }
}
