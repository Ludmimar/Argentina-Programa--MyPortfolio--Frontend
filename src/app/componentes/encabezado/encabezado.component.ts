import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true; 
  form!:FormGroup; 
  constructor(private miServicio:PersonaService, private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({       
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      position:['',[Validators.required]],
      ubication:['',[Validators.required]],
      image:['',[Validators.required,Validators.pattern('https?://.+')]],
      backImage:['',[Validators.required,Validators.pattern('https?://.+')]],
      dateOfBirth:['',[Validators.required]],
      mail:['',[Validators.required]],
      aboutMe:['',[Validators.required]],
      aboutMeImg:['',[Validators.required,Validators.pattern('https?://.+')]]
    })
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
    console.log(data);
    this.persona=data["Persona"]; 
    });
  }

  guardarEncabezado()
  {
    if (this.form.valid) 
    {
      let personaEditar= new Persona(this.form.controls['id'].value,this.form.controls['name'].value,
      this.form.controls['lastname'].value,this.form.controls['position'].value, 
      this.form.controls['ubication'].value, this.form.controls['image'].value, this.form.controls['dateOfBirth'].value,
      this.form.controls['mail'].value, this.form.controls['aboutMe'].value, this.form.controls['aboutMeImg'].value, 
      this.form.controls['backImage'].value);
      this.miServicio.editarDatosPersona(personaEditar).subscribe(data => {
        this.persona=personaEditar;
        this.form.reset();
        document.getElementById("cerrarModalEncabezado")?.click();   
      },
      error =>{
        alert('Ups, no se pudo actualizar. Por favor, intente nuevamente y/o contacte al administrador');
      });        
    }
    else
    { 
      this.form.markAllAsTouched();
      alert("Hay campos no válidos");
    }
  }
  mostrarDatosEncabezado(){
    this.form.get("name")?.setValue(this.persona.name);
    this.form.get("lastname")?.setValue(this.persona.lastname);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("image")?.setValue(this.persona.image);
    this.form.get("dateOfBirth")?.setValue(this.persona.dateOfBirth);
    this.form.get("mail")?.setValue(this.persona.mail);
    this.form.get("aboutMe")?.setValue(this.persona.aboutMe);
    this.form.get("aboutMeImg")?.setValue(this.persona.aboutMeImg);
    this.form.get("backImage")?.setValue(this.persona.backImage);
  }

  get name(){    
    return this.form.get("name");
  }      
  get lastname(){
    return this.form.get("lastname");
  }
  get ubication(){
    return this.form.get("ubication");
  }      
  get position(){
    return this.form.get("position");
  } 
  get image(){
    return this.form.get("image");
  }
  get dateOfBirth(){
    return this.form.get("dateOfBirth");
  }
  get mail(){
    return this.form.get("mail");
  }
  get aboutMe(){
    return this.form.get("aboutMe");
  }
  get aboutMeImg(){
    return this.form.get("aboutMeImg");
  }
  get backImage(){
    return this.form.get("backImage");
  }
}
