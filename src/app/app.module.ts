import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailsPokemon } from './services/details-pokemon.service';
import { ModalpokeComponent } from './pages/modalpoke/modalpoke.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ModalpokeComponent,
    FavoritosComponent,
    TarjetasComponent
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
