import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'primera-cancion',
  templateUrl: './primera-cancion.component.html',
  styleUrls: ['./primera-cancion.component.css']
})
export class PrimeraCancionComponent implements OnInit {
  @Input() primerTrack: Track = {};
  @Input() seguidores: number = 0;
  @Input() mostrar: boolean = true;
  @Input() albumId: number = 0;
  @Output('OnReproducirAlbum') idAlbum =  new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    
  }

  public reproducirAlbum(){
    this.idAlbum.emit(this.albumId!);
    
  }

}
