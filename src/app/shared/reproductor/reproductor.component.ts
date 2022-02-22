import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  @Input() track : Track ={}
  @Input() play : boolean = true;
  
  volumenTrack: number = 0.5;
  iconPlay: string = '';
  audio = new Audio();

  @Output('OnVolumen') volumen = new EventEmitter<number>();
  @Output('OnPause') pause = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public atras(): void {

  }
  public reproducir(): void {
    this.play = !this.play;
    this.pause.emit(this.play);
  }
  public adelante(): void {

  }

  public configurarVolumenTrack(){
    console.log(this.volumenTrack);
    this.volumen.emit(this.volumenTrack);
  }
}
