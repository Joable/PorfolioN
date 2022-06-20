import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-exed',
  templateUrl: './exed.component.html',
  styleUrls: ['./exed.component.css']
})
export class ExedComponent implements OnInit {
  educationList:any;
  constructor(private datosPorfolio: GetDataService) { }

  ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.educationList = data.education;
  });
  }

}
