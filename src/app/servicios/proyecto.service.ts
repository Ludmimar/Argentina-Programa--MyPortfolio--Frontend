import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Experiencia } from '../entidades/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url:string="http://localhost:8080/experiencia"; //llamo al backend

  constructor(private http:HttpClient) { }

  obtenerDatosProyecto():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+"/1"); 
    //lo dejamos en duro porq sabemos que trabajamos con una sola persona
  }

  eliminarExperiencia(id:number):Observable<any>
  {
    return  this.http.delete(this.url+"/"+id);
  }

  crearExperiencia(experiencia:any) : Observable<any[]>
   {
     return this.http.post<any[]>(this.url, experiencia);
   }

}
