import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {principalComponent} from "./principal/principal.component";
import {mapaComponent} from "./mapa/mapa.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'principal', component: principalComponent },
  { path: 'mapa', component: mapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

