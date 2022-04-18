import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  persona:any;
  constructor(private miServicio:PersonaService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
    console.log(data);
    this.persona=data["Persona"]; 
    });
  }
}
