import { Component } from '@angular/core';
import { ResultEstudiante } from "./result-estudiante/result-estudiante";
import { AdminEstudiante } from "./admin-estudiante/admin-estudiante";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administracion-estudiante',
  standalone: true,
  imports: [ResultEstudiante, AdminEstudiante, CommonModule],
  templateUrl: './administracion-estudiante.html',
  styleUrl: './administracion-estudiante.css'
})
export class AdministracionEstudiante {
  public filterValues: any = {};

  public onFilterChange(values: any): void {
    this.filterValues = values;
  }
}