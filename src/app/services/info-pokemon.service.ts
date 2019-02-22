import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPokemonService {

info: any = {};

  constructor(private http: HttpClient) {

    this.http.get('https://pokeapi.co/api/v2/pokemon/')
    .subscribe(resp =>{
      this.info = resp;
      console.log(resp ['results']['0']['url']);
    });
   }
}


//sprites.front_default  img de poke

// name