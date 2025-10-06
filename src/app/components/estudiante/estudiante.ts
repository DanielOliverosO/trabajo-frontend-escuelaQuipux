import { Component } from '@angular/core';
import { AdministracionEstudiante } from "./administracion-estudiante/administracion-estudiante";
import { NgIf } from "@angular/common";
import { NuevoEstudiante } from "./nuevo-estudiante/nuevo-estudiante";

@Component({
  selector: 'app-estudiante',
  imports: [AdministracionEstudiante, NgIf, NuevoEstudiante],
  templateUrl: './estudiante.html',
  styleUrl: './estudiante.css'
})
export class Estudiante {
  public nuevoEstudiante: boolean = false;
  mostFormNuevEstu(){
    this.nuevoEstudiante = true;
  }
  mostFormNuevBusq(){
    this.nuevoEstudiante = false;
  }
}