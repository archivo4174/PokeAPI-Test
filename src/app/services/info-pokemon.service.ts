import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiResponse } from '../models/poke-api.response';
import { DetailsPokemon } from './details-pokemon.service';
import { Observable } from 'rxjs';
import { forkJoin, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoPokemonService {

  constructor(
    private http: HttpClient,
    private detailsPokemon: DetailsPokemon
  ) { }

  getPokemons() {
    return this
      .http
      .get('https://pokeapi.co/api/v2/pokemon/');
      // .subscribe((resp: PokeApiResponse) => {
        /*for (let i = 0; i !== resp.results.length; i++) {
          console.log(resp.results[i].url);
          this.detailsPokemon.getPokemonDetail(resp.results[i].url);
        }*/
      // });
  }
}


//sprites.front_default  img de poke

// name