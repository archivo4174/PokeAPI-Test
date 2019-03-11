import { Component, OnInit, } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon-detail';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  listaFav = []
  statsDatos: PokemonDetail;

  getStats() {
    if (this.statsDatos.stats) {
      return this.statsDatos.stats.map(stat => stat.stat.name);
    } else {
      return '';
    }
  }

  getHabilidades() {
    if (this.statsDatos.abilities) {
      return this.statsDatos.abilities.map(ab => ab.ability.name);
    } else {
      return '';
    }
  }

  getType() {
    if (this.statsDatos.types) {
      return this.statsDatos.types.map(types => types.type.name);
    } else {
      return '';
    }
  }

  getImage() {
    return this.statsDatos.sprites ? this.statsDatos.sprites['front_default'] : ''
  }

  eliminar(item) {
    this.listaFav.splice(item, 1);
    let audio = new Audio();
    // why create a new audio on each click?
    audio.src = "/assets/audio/eliminarpoke.mp3";
    audio.load();
    audio.play();
    localStorage.setItem('pokefav', JSON.stringify(this.listaFav));;


  }

  relod() {
    window.location.reload()
  }

  obtener_fav() {
    let lista = JSON.parse(localStorage.getItem("pokefav"));
    this.listaFav = lista;

  }


  datos(item) {
    JSON.stringify(this.listaFav);
    this.statsDatos = this.listaFav[item];
    let audio = new Audio();
    audio.src = "/assets/audio/pokemon.mp3";
    audio.load();
    audio.play();
  }

  constructor() {
    this.obtener_fav();
  }

  ngOnInit() {
  }

}
