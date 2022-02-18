import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoutingModule } from './layout/layout-routing.module';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
