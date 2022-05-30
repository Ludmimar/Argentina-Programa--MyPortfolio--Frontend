import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/Educacion'; 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string="https://ludmila-martos.herokuapp.com/educacion";

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

   //boton guardar
   modificarEducacion(educacion:any): Observable<any[]>
   {
    return this.http.put<any[]>(this.url+"/editar", educacion); 
  }

}
