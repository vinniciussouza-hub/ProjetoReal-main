import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';

// Importação do FontAwesomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoacaoComponent } from './doacao/doacao.component';
import { PosRegistroComponent } from './pos-registro/pos-registro.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DoacaoComponent,
    PosRegistroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule  // Adicionando o FontAwesomeModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
