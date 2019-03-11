import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailsPokemon } from './details-pokemon.service';



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
    
  }
}


