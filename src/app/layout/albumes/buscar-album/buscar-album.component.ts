import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'buscar-album',
  templateUrl: './buscar-album.component.html',
  styleUrls: ['./buscar-album.component.css']
})
export class BuscarAlbumComponent implements OnInit {

  @Input() usuario: string = '';
  @Output('OnBusquedaAlbumPorNombre') busquedaAlbumes = new EventEmitter<string>();
  public buscador: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public buscarAlbumPorNombre(): void{
    console.log(this.buscador);
    this.busquedaAlbumes.emit(this.buscador);
  }
}
