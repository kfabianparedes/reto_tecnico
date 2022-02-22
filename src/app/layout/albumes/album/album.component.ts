import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() rutaFotoAlbum: string = '../../../../assets/img/foxbel-music-icon.png';
  @Input() tituloAlbum: string = 'Titulo';
  @Input() artistaAlbum: string = 'Artista';
  @Output() escuchar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public escucharAlbum(): void{
    this.escuchar.emit(true);
  }
}
