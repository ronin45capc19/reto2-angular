import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../escuelas/escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

  url: any = 'http://localhost:8080/v1/escuelas';

  constructor(private http: HttpClient) { }

  obtenerEscuelas(){
    //regresa un observable
    return this.http.get(this.url);
  }

  create(escuela: Escuela):Observable<Escuela> {
    return this.http.post<Escuela>(this.url,escuela);
  }

  //obr¿tener una escuela
  get(id:number):Observable<Escuela>{
    return this.http.get<Escuela>(this.url+'/'+id);
  }

  update(escuela: Escuela): Observable<Escuela>{
    return this.http.put<Escuela>(this.url,escuela);
  }

  delete(id:number):Observable<Escuela>{
    return this.http.delete<Escuela>(this.url+'/'+id);
  }
}
