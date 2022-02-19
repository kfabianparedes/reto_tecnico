import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ReproductorComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    ReproductorComponent,
    NavComponent
  ]
})
export class SharedModule { }
