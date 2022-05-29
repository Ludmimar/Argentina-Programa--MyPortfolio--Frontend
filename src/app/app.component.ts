import { Component } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';  
  persona!:Persona;
  formLoguin!:FormGroup;
  

  constructor(private formBuilder:FormBuilder) {
    this.formLoguin=this.formBuilder.group({   
      mail:['',[Validators.required]],
      password:['',[Validators.required]],
    })

   // this.grabarLocalStorage();
  // this.obtenerLocalStorage();
   }

  ngOnInit(): void {
  }
/*
  grabarLocalStorage()
  {
    let mail:string = "ludmilamartos@gmail.com";
    let password:string = "Kiyosaky89"
    localStorage.setItem("mail", mail)
    localStorage.setItem("password", password)
  }

  obtenerLocalStorage()
  {
    let mail = localStorage.getItem("mail");
    let password = localStorage.getItem("password");

    console.log(mail);
    console.log(password);
  }*/








   get mail(){
    return this.formLoguin.get("mail");
  }
  get password(){
    return this.formLoguin.get("password");
  }
  
}

