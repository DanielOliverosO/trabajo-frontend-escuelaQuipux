import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultEstudiante } from '../result-estudiante';

@Component({
  selector: 'app-dialog-elim-estu',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule],
  templateUrl: './dialog-elim-estu.html',
  styleUrl: './dialog-elim-estu.css'
})
export class DialogElimEstu {
  constructor(private dialogRef: MatDialogRef<DialogElimEstu>) {}

  closeDialog() {
    this.dialogRef.close();
  }
  confirmDelete() {
    // Lógica para eliminar el estudiante
    this.dialogRef.close(true); // Puedes pasar un valor para indicar que se confirmó la eliminación
  }
}
