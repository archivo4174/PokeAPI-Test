import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DetailsPokemon {

  constructor(private http: HttpClient) { }

  getPokemonDetail(url: string) {
    return this.http.get(url);
  }
}
