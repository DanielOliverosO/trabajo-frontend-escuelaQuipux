import { Component } from '@angular/core';
import { ResultEstudiante } from "./result-estudiante/result-estudiante";
import { AdminEstudiante } from "./admin-estudiante/admin-estudiante";

@Component({
  selector: 'app-administracion-estudiante',
  imports: [ResultEstudiante, AdminEstudiante],
  templateUrl: './administracion-estudiante.html',
  styleUrl: './administracion-estudiante.css'
})
export class AdministracionEstudiante {
  
}
