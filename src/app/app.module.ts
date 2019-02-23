import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetailsPokemon } from './services/details-pokemon.service';
import { ModalpokeComponent } from './pages/modalpoke/modalpoke.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ModalpokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DetailsPokemon
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
