import { Component } from '@angular/core';
import { InfoPokemonService } from './services/info-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';

  constructor(public infoPokemon: InfoPokemonService){

  }
}
