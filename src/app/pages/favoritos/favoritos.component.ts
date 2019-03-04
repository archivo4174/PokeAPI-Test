import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  eliminar(){
    let audio = new Audio();
    audio.src = "/assets/audio/eliminarpoke.mp3";
    audio.load();
    audio.play();
  }
  constructor() { }

  ngOnInit() {
  }

}
