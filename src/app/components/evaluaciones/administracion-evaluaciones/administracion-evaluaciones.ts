import { Component } from '@angular/core';
import { AdminEvaluaciones } from "./admin-evaluaciones/admin-evaluaciones";
import { TablaEvaluaciones } from "./tabla-evaluaciones/tabla-evaluaciones";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-administracion-evaluaciones',
  templateUrl: './administracion-evaluaciones.html',
  styleUrls: ['./administracion-evaluaciones.css'],
  imports: [CommonModule, AdminEvaluaciones, TablaEvaluaciones]
})
export class AdministracionEvaluaciones {
    public filterValues: any = {};

  public onFilterChange(values: any): void {
    this.filterValues = values;
  }
}
