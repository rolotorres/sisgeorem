import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {

  lat = -25.2968361;
  lng = -57.6681294;
  
  constructor() { }

  ngOnInit() {
  }

}
