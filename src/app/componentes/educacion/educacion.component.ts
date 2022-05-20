import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/entidades/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {  

  educacion:Educacion[];  
  usuarioAutenticado:boolean=true; 
  form:FormGroup;
  formEditar:FormGroup;
  constructor(
    private miServicio:EducacionService, 
    private formBuilder:FormBuilder,
    private router:Router
    ) {
    this.form=this.formBuilder.group({      
      school:['',[Validators.required]],
      title:['',[Validators.required]],
      img:['',[Validators.required,Validators.pattern('https?://.+')]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      career:['',[Validators.required]],
      idPersona:['',[Validators.required]],
    })

    this.formEditar=this.formBuilder.group({ 
      id:['',[Validators.required]],
      school:['',[Validators.required]],
      title:['',[Validators.required]],
      img:['',[Validators.required,Validators.pattern('https?://.+')]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      career:['',[Validators.required]],
      idPersona:['',[Validators.required]],
    })
  }

  ngOnInit(): void {    
    this.miServicio.obtenerDatosEducacion().subscribe(data => { 
    console.log(data); 
    this.educacion=data; 
    
    })
  }

  eliminarEducacion(item:Educacion)
  {
    //alert(item.id);
    this.miServicio.eliminarEducacion(item.id).subscribe(data =>{
      this.educacion.splice(this.educacion.indexOf(item),1);
    }, error => {
      alert("Se produjo un error, consulte al administrador");
    })
  }
 
  guardarEducacion()
  {
    if (this.form.valid) 
    {
      let edu=  {   
        school: this.form.get("school")?.value,
        title: this.form.get("title")?.value,
        img: this.form.get("img")?.value,
        start: this.form.get("start")?.value,
        end: this.form.get("end")?.value,
        career: this.form.get("career")?.value,
        idPersona: this.form.get("idPersona")?.value   
      }    
      this.miServicio.crearEducacion(edu).subscribe();     
      this.form.reset();          
      document.getElementById("cerrarModalEducacion")?.click();
      window.history.back();
  }
  else
  { 
    this.form.markAllAsTouched();
    alert("Hay campos no válidos");
  }
}

mostrarEducacion(item:Educacion){  //Boton   
  this.formEditar.get("id")?.setValue(item.id),
  this.formEditar.get("school")?.setValue(item.school),
  this.formEditar.get("title")?.setValue(item.title),
  this.formEditar.get("img")?.setValue(item.img),
  this.formEditar.get("start")?.setValue(item.start),
  this.formEditar.get("end")?.setValue(item.end),
  this.formEditar.get("career")?.setValue(item.career),
  this.formEditar.get("idPersona")?.setValue(item.idPersona)  
}    
    
modificarEducacion()
{  
  {
    if (this.formEditar.valid) 
    {
      let edu=  {    
        id: this.formEditar.get("id")?.value,
        school: this.formEditar.get("school")?.value,
        title: this.formEditar.get("title")?.value,
        img: this.formEditar.get("img")?.value,
        start: this.formEditar.get("start")?.value,
        end: this.formEditar.get("end")?.value,
        career: this.formEditar.get("career")?.value,
        idPersona: this.formEditar.get("idPersona")?.value   
      }    
      this.miServicio.modificarEducacion(edu).subscribe();
      this.formEditar.reset();    
      document.getElementById("cerrarModalEducacion")?.click();
      
  }
  else
  { 
    this.formEditar.markAllAsTouched();
    alert("Hay campos no válidos");
  }
        
  }
}
  


 
    /*{
    "id": 1,
    "school": "UTN",
    "title": "Tecnicatura en programacion",
    "img": "https://github.com/Ludmimar/MyPortfolio/blob/master/src/assets/imagenes/utn.png?raw=true",
    "career": "Analista de sistemas",
    "start": 2013,
    "end": 2015,
    "idPersona": 1
}*/

get id(){    
  return this.form.get("id");
}   

get school(){    
  return this.form.get("school");
}      
get title(){
  return this.form.get("title");
}
get img(){
  return this.form.get("img");
}      
get start(){
  return this.form.get("start");
} 
get end(){
  return this.form.get("end");
}
get career(){
  return this.form.get("career");
}


}
