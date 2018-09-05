import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = -25.2968361;
  lng: number = -57.6681294;
  
  constructor() { }

  ngOnInit() {
  }

}
