import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  @Input() track : Track ={}
  @Input() mostrar : boolean = true;
  @Input() imagenTrack: string = '';

  @Output('OnReproducir') reproducirTrack =  new EventEmitter<Track>();

  constructor() { }

  ngOnInit(): void {
  }
  
  
  public reproducir(): void{
    this.reproducirTrack.emit(this.track);
  }
}
