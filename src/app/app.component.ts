import { Component } from '@angular/core';
import { InfoPokemonService } from './services/info-pokemon.service';
import { OnInit } from '@angular/core';
import { PokeApiResponse } from './models/poke-api.response';
import { DetailsPokemon } from './services/details-pokemon.service';
import { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  pokemons = [];

  constructor(
    public infoPokemon: InfoPokemonService,
    private detailsPokemon: DetailsPokemon
  ) { }

  ngOnInit() {
    this.infoPokemon.getPokemons().subscribe((resp: PokeApiResponse) => {
      const serviceMap = resp.results.map(result => this.detailsPokemon.getPokemonDetail(result.url));
      forkJoin(serviceMap).subscribe(pokemons => {
        this.pokemons = pokemons;
        debugger
      });
    });
  }
}
