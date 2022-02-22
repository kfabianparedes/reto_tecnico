import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album, Albums } from 'src/app/models/album.model';
import { Tracks } from 'src/app/models/track.model';
import { AlbumService } from 'src/app/services/album.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  public idPrimerAlbum: number = 0;
  public seguidoresPrimerAlbum: number = 0;

  public busqueda: string = '';
  public albums: Album[] = [];
  public album: Album = {};
  public albumPorBusqueda: Tracks = {}
  
  public usuario: string = '';
  public mostrar: boolean = false;
  constructor(
    private albumService: AlbumService,
    private _router: Router,
    private storageService: StorageService,
  ) { }
  
  ngOnInit(): void {
    this.listarAlbumes()
    this.usuario = this.storageService.getString('usur_names')!;
  }

  private listarAlbumes():void{
    this.albumService.listarMisAlbumes().subscribe(
      (data: any)=>{
        this.albums = data.data;
        this.album = this.albums[0];
        this.idPrimerAlbum = this.album.id!;
        this.primerAlbumInfo();
      }
    );
  }

  private primerAlbumInfo(): void{
    this.albumService.primerAlbumInfo(this.idPrimerAlbum).subscribe(
      (data: any)=>{
        console.log(data);
        this.seguidoresPrimerAlbum = data.fans;
        this.mostrar = true;

      }
    );
  }

  public reproducirAlbum($event: any, album_id : number): void{
    console.log($event);
    $event?
    this._router.navigate(['home/mis-albumes',album_id]):
    this._router.navigate(['home']);
  }

  

  public busquedaAlbumPorNombre($event : any): void{
    console.log($event);
    this.busqueda = $event;
  }
}
