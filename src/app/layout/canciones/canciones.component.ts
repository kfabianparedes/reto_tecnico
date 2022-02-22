import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Track } from 'src/app/models/track.model';
import { StorageService } from 'src/app/services/storage.service';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  public idAlbum: number = 0;
  public idPrimerTrack: number = 0;

  public tracks : Track[] = [];
  public track : Track = {};
  public trackReproduciendo: Track = {};
  public mostrar: boolean = true;
  public mostrarPrimeraCancion: boolean = false;
  public mostrarTracks: boolean = false;
  
  public usuario: string = '';

  public busqueda: string = '';


  public mostrarReproductor:boolean = false;
  public play: boolean = true;
  private audio = new Audio();
  public primeraReproduccion = true;


  constructor(
    private _trackService: TrackService,
    private _activeRoute: ActivatedRoute,
    private _storageService: StorageService
  ) { }

  ngOnInit(): void {
    this._obtenerIdAlbumPorRuta();
    this.usuario = this._storageService.getString('usur_names')!;
  }

  private _obtenerIdAlbumPorRuta(): void{
    this._activeRoute.params.subscribe((prop: Params) => {
      this.idAlbum = prop['id'];
      this._listarTracksPorAlbum();
    });
  }

  private _listarTracksPorAlbum():void{
    this._trackService.listarTracksPorAlbum(this.idAlbum).subscribe((data: any)=>{
      console.log(data);
      console.log(data.data);
      this.idPrimerTrack = data.data[0].id;
      this.tracks = data.data;
      this.mostrar = true;
      this._trackService.obtenerTrackPorId(this.idPrimerTrack).subscribe(
          (res:any)=>{
            this.track = res;
            this.mostrarPrimeraCancion = true;
          }
        );  
      }
    );
  }

  public busquedaCancionPorNombre($event : any): void{
    console.log($event);
    this.busqueda = $event;
  }

  public reproducirTrack($event: any):void{
    console.log("musica reproducida");
    console.log($event);
    this.play = true;
    this.primeraReproduccion = true;
    this._trackService.obtenerTrackPorId($event.id).subscribe(
      (res:any)=>{
        this.trackReproduciendo = res;
        this.mostrarReproductor = true;
        this.playAudio(this.trackReproduciendo.preview!);
      }
    );  
  }

  

  private playAudio(link_musica : string){
    if(this.play && this.primeraReproduccion){
      this.audio.src = link_musica;
      this.audio.load();
      this.primeraReproduccion = false;
    }
    this.audio.play();
    this.play = false;
  
  }
  private pauseAudio(){
    this.audio.pause();
    this.play = true;

  }

  public volumenTrack($event: any):void{
    console.log($event);
    this.audio.volume = $event;
  }
  
  public playTrack($event: any): void{
    console.log($event);
    this.play = $event;
    if(this.play)
      this.pauseAudio();
    else
      this.audio.play();
  }

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  audioEnded(): void {
      console.log('ended!!')
  }
  public reproducirAlbum($event:any){
    console.log($event);
    console.log(this.tracks)

  }
  
  ngOnDestroy(): void {
    console.log("Pausando musica"); // ngOnDestroy is not triggering
    this.audio.pause();
  }


}
