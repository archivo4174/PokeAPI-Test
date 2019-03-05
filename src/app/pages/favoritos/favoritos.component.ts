import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  lista_fav = []
   
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


  constructor() { 
    this.obtener_fav();

  
  }

  ngOnInit() {
  }

}
