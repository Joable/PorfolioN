import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css']
})
export class NamecardComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio: GetDataService) { }

  ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.miPorfolio = data;
  });
  }

}
