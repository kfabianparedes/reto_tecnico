import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReproductorComponent } from './reproductor/reproductor.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ReproductorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    ReproductorComponent
  ]
})
export class SharedModule { }
