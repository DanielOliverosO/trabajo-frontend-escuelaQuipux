import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(NuevoEstudiante) nuevoEstudianteComp!: NuevoEstudiante;
  mostFormNuevEstu(){
    this.nuevoEstudiante = true;
  }
  mostFormNuevBusq(){
    // Si está en modo nuevo estudiante y el botón Guardar fue pulsado, solo guardar (no cerrar ni limpiar inscripciones)
    if (this.nuevoEstudiante && this.nuevoEstudianteComp) {
      this.nuevoEstudianteComp.saveEstudiante();
    }
    // Si quieres cerrar el formulario después de guardar, puedes hacerlo aquí (opcional)
    // this.nuevoEstudiante = false;
  }
}