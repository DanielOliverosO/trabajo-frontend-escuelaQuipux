import { Component, inject } from '@angular/core';
import {DialogElimEstu} from './dialog-elim-estu/dialog-elim-estu';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-result-estudiante',
  imports: [],
  templateUrl: './result-estudiante.html',
  styleUrl: './result-estudiante.css'
})
export class ResultEstudiante {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogElimEstu);
  }

}
