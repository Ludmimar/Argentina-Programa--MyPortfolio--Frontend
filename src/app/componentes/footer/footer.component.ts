import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  persona!:Persona;
  constructor(private miServicio:PersonaService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {
    console.log(data);
    this.persona=data;
    });
  }
}
