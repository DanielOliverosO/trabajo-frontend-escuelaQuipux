import { Component } from '@angular/core';
import { FormNuevoEstudiante } from "./form-nuevo-estudiante/form-nuevo-estudiante";
import { TablaNuevoEstudiante } from "./tabla-nuevo-estudiante/tabla-nuevo-estudiante";

@Component({
  selector: 'app-nuevo-estudiante',
  imports: [FormNuevoEstudiante, TablaNuevoEstudiante],
  templateUrl: './nuevo-estudiante.html',
  styleUrl: './nuevo-estudiante.css'
})
export class NuevoEstudiante {

}
