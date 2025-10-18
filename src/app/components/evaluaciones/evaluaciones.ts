import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdministracionEvaluaciones } from "./administracion-evaluaciones/administracion-evaluaciones";

@Component({
  selector: 'app-evaluaciones',
  imports: [FormsModule, AdministracionEvaluaciones],
  templateUrl: './evaluaciones.html',
  styleUrls: ['./evaluaciones.css']
})
export class Evaluaciones {}
