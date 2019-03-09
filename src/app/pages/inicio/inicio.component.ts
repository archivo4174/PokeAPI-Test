import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { PokeApiResult } from 'src/app/models/poke-api.response';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  seleccionar(){
    let audio = new Audio();
    audio.src = "/assets/audio/select.mp3";
    audio.load();
    audio.play();
  }

  

  constructor(public datospoke: AppComponent) { }

  @Input () buscador : PokeApiResult
  
    
  filterPost = this.buscador;
     
  

  ngOnInit() {

  
  }

}
