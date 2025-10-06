import { Component, inject } from '@angular/core';
import {DialogElimEstu} from './dialog-elim-estu/dialog-elim-estu';
import {MatDialog} from '@angular/material/dialog';
import { Estudiante } from '../../../../models/estudiante';
import { EstudianteService } from '../../../../services/estudianteService';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-result-estudiante',
  imports: [FormsModule, CommonModule],
  templateUrl: './result-estudiante.html',
  styleUrl: './result-estudiante.css'
})
export class ResultEstudiante {
  public estudianteService = inject(EstudianteService);
  public estudiantes: Estudiante[] = this.estudianteService.getEstudiantes();
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogElimEstu);
  }
}
