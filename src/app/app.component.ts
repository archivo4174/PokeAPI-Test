import { Component, ViewChild } from '@angular/core';
import { InfoPokemonService } from './services/info-pokemon.service';
import { OnInit } from '@angular/core';
import { PokeApiResponse } from './models/poke-api.response';
import { DetailsPokemon } from './services/details-pokemon.service';
import { PokemonDetail } from './models/pokemon-detail';
import { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  datospoke = {};
 
  @ViewChild(TarjetasComponent) child: TarjetasComponent;
  


  

  constructor(
   
  ) { }

  ngOnInit() {
    this.datospoke = this.child.datospoke;
  }
}
  
