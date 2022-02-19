import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',redirectTo:'/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
