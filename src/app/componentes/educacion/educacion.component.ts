import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
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
  constructor(private miServicio:EducacionService, private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({       
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
        idPersona: this.form.get("idPersona")?.value,   
      }    
      this.miServicio.crearEducacion(edu).subscribe();

      this.form.reset();    
      document.getElementById("cerrarModalEducacion")?.click(); 
  }
  else
  { 
    this.form.markAllAsTouched();
    alert("Hay campos no válidos");
  }
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
