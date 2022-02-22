import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'buscar-cancion',
  templateUrl: './buscar-cancion.component.html',
  styleUrls: ['./buscar-cancion.component.css']
})
export class BuscarCancionComponent implements OnInit {

  @Input() usuario: string = '';
  @Output('OnBusquedaCancionPorNombre') buscarCancion = new EventEmitter<string>();
  public buscador: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public buscarCancionPorNombre(): void{
    console.log(this.buscador);
    this.buscarCancion.emit(this.buscador);
  }
}
