import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'primer-album',
  templateUrl: './primer-album.component.html',
  styleUrls: ['./primer-album.component.css']
})
export class PrimerAlbumComponent implements OnInit {
  @Input() primerAlbum: Album = {};
  @Input() seguidores: number = 0;

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  public listarTracksPorAlbum(): void{
    this._router.navigate(['home/mis-albumes',this.primerAlbum.id])
  }
}
