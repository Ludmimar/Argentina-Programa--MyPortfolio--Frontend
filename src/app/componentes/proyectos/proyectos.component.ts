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
  usuarioAutenticado:boolean=false; 
  form:FormGroup;  
  formEditar:FormGroup;

  constructor(private miServicio:ProyectoService,  
    private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({       
      title:['',[Validators.required]],
      details:['',[Validators.required]],
      img:['',[Validators.required,Validators.pattern('https?://.+')]],
      lenguage:['',[Validators.required]],
      url:['',[Validators.required,Validators.pattern('https?://.+')]],   
      idPersona:['',[Validators.required]],
    })

    this.formEditar=this.formBuilder.group({   
      id:['',[Validators.required]],    
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
      let loguin = localStorage.getItem("loguin");
      if (loguin == "ok")
      {
        this.usuarioAutenticado=true;
      }
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
      window.location.reload();
  }
  else
  { 
    this.form.markAllAsTouched();
    alert("Hay campos no válidos");
  }
  }

  mostrarExperiencia(item:Experiencia){  //Boton   
    this.formEditar.get("id")?.setValue(item.id),
    this.formEditar.get("details")?.setValue(item.details),
    this.formEditar.get("title")?.setValue(item.title),
    this.formEditar.get("img")?.setValue(item.img),
    this.formEditar.get("lenguage")?.setValue(item.lenguage),
    this.formEditar.get("url")?.setValue(item.url),
    this.formEditar.get("idPersona")?.setValue(item.idPersona)  
  }    
      
  modificarExperiencia()
  {
    if (this.formEditar.valid){
      let exp=  {    
        id: this.formEditar.get("id")?.value,
        details: this.formEditar.get("details")?.value,
        title: this.formEditar.get("title")?.value,
        img: this.formEditar.get("img")?.value,
        lenguage: this.formEditar.get("lenguage")?.value,
        url: this.formEditar.get("url")?.value,
        idPersona: this.formEditar.get("idPersona")?.value   
      } 
      this.miServicio.modificarExperiencia(exp).subscribe();      
      this.formEditar.reset();          
      document.getElementById("cerrarModalExperiencia")?.click();   
      window.location.reload();
    }
    else
    { 
      this.formEditar.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }

  get id(){    
    return this.form.get("id");
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
