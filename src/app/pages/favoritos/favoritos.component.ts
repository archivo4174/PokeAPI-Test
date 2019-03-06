import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon-detail';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  lista_fav = []
  statsDatos: PokemonDetail;

  getStats() {
    
    if (this.statsDatos.stats) {
      return this.statsDatos.stats.map(stat => stat.stat.name);
      
    } else {
      return '';
    }
  }

  getHabilidades(){
    
    if (this.statsDatos.abilities) {
      return this.statsDatos.abilities.map(ab => ab.ability.name);
    } else {
      return '';
    }
    
  }

  getType(){
    if (this.statsDatos.types) {
      return this.statsDatos.types.map(types => types.type.name);
    } else {
      return '';
     
    }
  }

  eliminar(item){
    this.lista_fav.splice(item,1);
    let audio = new Audio();
    audio.src = "/assets/audio/eliminarpoke.mp3";
    audio.load();
    audio.play();
    localStorage.setItem('pokefav', JSON.stringify(this.lista_fav));;
    
    
  }

  relod(){
    window.location.reload()
  }

  obtener_fav(){
    let lista = JSON.parse( localStorage.getItem("pokefav")  );
      this.lista_fav = lista;
    
  }


  datos(item){
    
    JSON.stringify(this.lista_fav);
    // this.lista_fav.slice(item,1);
    this.statsDatos = this.lista_fav[item];
    let audio = new Audio();
    audio.src = "/assets/audio/pokemon.mp3";
    audio.load();
    audio.play();
      
  }
     
    

  constructor() { 
    this.obtener_fav();
    
  
  }

  ngOnInit() {
    // this.datos(0)
  }

}
