import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon-detail';

@Component({
  selector: 'app-modalpoke',
  templateUrl: './modalpoke.component.html',
  styleUrls: ['./modalpoke.component.css']
})
export class ModalpokeComponent implements OnInit {

 

    @Input()
    pokemon: PokemonDetail

  constructor() { }

  getStats() {
    
    if (this.pokemon.stats) {
      return this.pokemon.stats.map(stat => stat.stat.name);
      
    } else {
      return '';
    }
  }

  getHabilidades(){
    
    if (this.pokemon.abilities) {
      return this.pokemon.abilities.map(ab => ab.ability.name);
    } else {
      return '';
    }
    
  }

  getPeso(){
    return this.pokemon.weight ? this.pokemon.weight : ''
  }
  getAltura(){
    return this.pokemon.height ? this.pokemon.height : ''
  }

  getName(){
    return this.pokemon.name ? this.pokemon.name : ''
  }

  getImage() {
    return this.pokemon.sprites ? this.pokemon.sprites['front_default'] : ''
  }

  getBase(){
    return this.pokemon.base_experience? this.pokemon.base_experience : ''
  }

  getType(){
    if (this.pokemon.types) {
      return this.pokemon.types.map(types => types.type.name);
    } else {
      return '';
     
    }
  }

  ngOnInit() {
    
  }

}
