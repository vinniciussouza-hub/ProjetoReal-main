import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";

import { DoacaoComponent } from './doacao/doacao.component';
import { PosRegistroComponent } from './pos-registro/pos-registro.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'PosRegistro', component: PosRegistroComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

