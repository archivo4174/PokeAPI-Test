import { Component, OnInit } from '@angular/core';
import { InfoPokemonService } from 'src/app/services/info-pokemon.service';
import { DetailsPokemon } from 'src/app/services/details-pokemon.service';
import { PokeApiResponse,  } from 'src/app/models/poke-api.response';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  pokemons = [];
  datospoke = {};




  favoritos(pokemon) {
    let audio = new Audio();
    audio.src = "/assets/audio/agregado.mp3";
    audio.load();
    audio.play();
    let lista = localStorage.getItem("pokefav") ? JSON.parse(localStorage.getItem("pokefav")) : [];
    lista.push(pokemon);
    localStorage.setItem('pokefav', JSON.stringify(lista));



  }

  pokemon(pokemon) {
    let audio = new Audio();
    audio.src = "/assets/audio/pokemon.mp3";
    audio.load();
    audio.play();
    this.datospoke = pokemon;

  }




  constructor(
    public infoPokemon: InfoPokemonService,
    private detailsPokemon: DetailsPokemon,

  ) { }


  filterPost = ""

  ngOnInit() {
    this.infoPokemon.getPokemons().subscribe((resp: PokeApiResponse) => {
      const serviceMap = resp.results.map(result => this.detailsPokemon.getPokemonDetail(result.url));
      forkJoin(serviceMap).subscribe(pokemons => {
        this.pokemons = pokemons;
      });
    });
  }

}
