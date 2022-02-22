import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path:'',component: AuthComponent},
  {path:'not-found',component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
