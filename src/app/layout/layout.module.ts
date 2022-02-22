import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AlbumesComponent } from './albumes/albumes.component';
import { AlbumComponent } from './albumes/album/album.component';
import { PrimerAlbumComponent } from './albumes/primer-album/primer-album.component';
import { CancionesComponent } from './canciones/canciones.component';
import { PrimeraCancionComponent } from './canciones/primera-cancion/primera-cancion.component';
import { CancionComponent } from './canciones/cancion/cancion.component';
import { BuscarAlbumComponent } from './albumes/buscar-album/buscar-album.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { BuscarCancionComponent } from './canciones/buscar-cancion/buscar-cancion.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AlbumesComponent,
    AlbumComponent,
    PrimerAlbumComponent,
    CancionesComponent,
    PrimeraCancionComponent,
    CancionComponent,
    BuscarAlbumComponent,
    BuscarCancionComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    PipesModule
  ]
})
export class LayoutModule { }
