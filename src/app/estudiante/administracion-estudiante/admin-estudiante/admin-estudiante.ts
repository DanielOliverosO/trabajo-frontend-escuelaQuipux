import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-admin-estudiante',
  imports: [FontAwesomeModule],
  templateUrl: './admin-estudiante.html',
  styleUrl: './admin-estudiante.css'
})
export class AdminEstudiante {
  public nuevoEstudiante: boolean = false;
  mostFormNuevEstu(){
    this.nuevoEstudiante = true;
  }
  mostFormNuevBusq(){
    this.nuevoEstudiante = false;
  }

}
