import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto:any;
  constructor(private miServicio:ProyectoService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyecto().subscribe(data => { 
      console.log(data); 
      this.proyecto=data["proyect"]; 
      })
  }

}
