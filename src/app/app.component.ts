import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  datospoke = {};
 

  constructor() { }

  ngOnInit() {
    
  }
}
  
