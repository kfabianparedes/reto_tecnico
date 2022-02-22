import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
