import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component'

//Create our routes array
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
