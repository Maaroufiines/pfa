import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_shared/login/login.component';
import { SignUpComponent } from './_shared/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './_shared/forget-password/forget-password.component';
import { Error404Component } from './_shared/error404/error404.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"forgot",component:ForgetPasswordComponent},
  { path: '', loadChildren: () => import('./backoffice/backadmin.module').then(m => m.BackadminModule) },
  // { path: '', loadChildren: () => import('./frontoffice/vitrine.module').then(m => m.VitrineModule) },
  {path : '**',component:Error404Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
