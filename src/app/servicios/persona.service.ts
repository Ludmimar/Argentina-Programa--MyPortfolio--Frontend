 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string="https://ludmila-martos.herokuapp.com/persona";
  constructor(private http:HttpClient) {    

    console.log("El servicio de persona esta corriendo");
  }

  obtenerDatosPersona():Observable<Persona>{
    return this.http.get<Persona>(this.url+"/1");
   }
  editarDatosPersona(persona:Persona):Observable<any>{
    return this.http.post(this.url,persona); 
  }
}
