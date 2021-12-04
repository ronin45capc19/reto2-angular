import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscuelasService } from '../services/escuelas.service';
import { Escuela } from './escuela';
import { EscuelasComponent } from './escuelas.component';

@Component({
  selector: 'app-form-escuela',
  templateUrl: './form-escuela.component.html',
  styleUrls: ['./form-escuela.component.css']
})
export class FormEscuelaComponent implements OnInit {
  escuela: Escuela = new Escuela();
  titulo: string ="Registro de escuela"
  
  constructor(private _escuelas: EscuelasService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.escuela);
    this._escuelas.create(this.escuela).subscribe(
      res=>this.router.navigate(['/escuelas'])
    );
  }
}
