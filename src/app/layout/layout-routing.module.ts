import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesComponent } from './albumes/albumes.component';
import { CancionesComponent } from './canciones/canciones.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'home',
    component:LayoutComponent,
    children:[
      {path:'mis-albumes',component:AlbumesComponent},
      {path:'mis-albumes/:id',component:CancionesComponent},
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
