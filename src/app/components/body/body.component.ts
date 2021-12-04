import { Component, OnInit } from '@angular/core';
import { EscuelasService } from 'src/app/services/escuelas.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
//any= cualquier tipo de dato
    escuelas: any;
    arrEscuelas: any;

//declaracion de variable que tiene los servicios
  constructor(private _escuelas: EscuelasService) { }

  ngOnInit(): void {
    this.obtenerEscuelas();
  }
//servicio de escuelas.service.ts
  obtenerEscuelas(){
    this._escuelas.obtenerEscuelas()
    //esprension landa para asignar la respuesta a una variable
        .subscribe(respuesta => {
            this.escuelas=respuesta;
            this.arrEscuelas= this.escuelas.escuelaResponse.escuela;
            console.log(this.escuelas);
        })
  }

}
