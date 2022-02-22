import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { NavComponent } from './nav/nav.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent,
    ReproductorComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    SidebarComponent,
    ReproductorComponent,
    NavComponent
  ]
})
export class SharedModule { }
