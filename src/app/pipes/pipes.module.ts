import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNamePipe } from './short-name.pipe';
import { FilterAlbumPipe } from './filter-album.pipe';
import { FilterTrackPipe } from './filter-track.pipe';



@NgModule({
  declarations: [
    ShortNamePipe,
    FilterAlbumPipe,
    FilterTrackPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShortNamePipe,
    FilterAlbumPipe,
    FilterTrackPipe
  ]
})
export class PipesModule { }
