import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDetail } from '../models/pokemon-detail';
// unused modules

@Injectable()
export class DetailsPokemon {

  // ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
  // comment?
  constructor(private http: HttpClient) { }

  getPokemonDetail(url: string) {
    return this.http.get(url);
  }
}
