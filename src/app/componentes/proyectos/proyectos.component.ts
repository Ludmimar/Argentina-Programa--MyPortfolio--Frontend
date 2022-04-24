import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import {Experiencia } from 'src/app/entidades/Experiencia';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto:Experiencia[]; //es un array o una coleccion
  usuarioAutenticado:boolean=true; 
  form:FormGroup;
  constructor(private miServicio:ProyectoService,  private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({       
      title:['',[Validators.required]],
      details:['',[Validators.required]],
      img:['',[Validators.required,Validators.pattern('https?://.+')]],
      lenguage:['',[Validators.required]],
      url:['',[Validators.required,Validators.pattern('https?://.+')]],   
      idPersona:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyecto().subscribe(data => { 
      console.log(data); 
      this.proyecto=data; 
      })
  }

  eliminarExperiencia(item:Experiencia)
  {
    //alert(item.id);
    this.miServicio.eliminarExperiencia(item.id).subscribe(data =>{
      this.proyecto.splice(this.proyecto.indexOf(item),1);
    }, error => {
      alert("Se produjo un error, consulte al administrador");
    })
  }

  guardarExperiencia()
  {
    if (this.form.valid) 
    {
      let exp=  {    
        title: this.form.get("title")?.value,
        details: this.form.get("details")?.value,
        img: this.form.get("img")?.value,
        lenguage: this.form.get("lenguage")?.value,
        url: this.form.get("url")?.value,        
        idPersona: this.form.get("idPersona")?.value,   
      }    
      this.miServicio.crearExperiencia(exp).subscribe();

      this.form.reset();    
      document.getElementById("cerrarModalExperiencia")?.click(); 
  }
  else
  { 
    this.form.markAllAsTouched();
    alert("Hay campos no válidos");
  }
}


  get title(){
    return this.form.get("title");
  }
  get details(){
    return this.form.get("details");
  }      
  get img(){
    return this.form.get("img");
  } 
  get lenguage(){
    return this.form.get("lenguage");
  }
  get url(){
    return this.form.get("url");
  }

  get idPersona(){
    return this.form.get("idPersona");
  }

}
