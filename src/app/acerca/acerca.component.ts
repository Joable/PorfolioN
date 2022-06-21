import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  showInput:boolean = false;
  miPorfolio:any;
  texto:string = '';

  constructor(private datosPorfolio: GetDataService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio = data;
    });
  }

  altInput(){
    this.showInput = this.showInput?false:true;
  }



}
