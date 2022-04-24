import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/Educacion'; 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string="http://localhost:8080/educacion";

  constructor(private http:HttpClient) { }

  obtenerDatosEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+"/1");
  }

  eliminarEducacion(id:number):Observable<any>
  {
    return  this.http.delete(this.url+"/"+id);
  }

   //lo agregue
  crearEducacion(educacion:any) : Observable<any[]>
   {
     return this.http.post<any[]>(this.url, educacion);
   }
  
}
