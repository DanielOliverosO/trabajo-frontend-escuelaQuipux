import { Component, ViewChild } from '@angular/core';
import { EstudianteService } from '../../../services/estudianteService';
import { FormNuevoEstudiante } from './form-nuevo-estudiante/form-nuevo-estudiante';
import { TablaNuevoEstudiante } from './tabla-nuevo-estudiante/tabla-nuevo-estudiante';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.html',
  styleUrls: ['./nuevo-estudiante.css'],
  standalone: true,
  imports: [FormNuevoEstudiante, TablaNuevoEstudiante]
})
export class NuevoEstudiante {

  @ViewChild(FormNuevoEstudiante) formNuevoEstudiante!: FormNuevoEstudiante;
  @ViewChild(TablaNuevoEstudiante) tablaNuevoEstudiante!: TablaNuevoEstudiante;

  constructor(private estudianteService: EstudianteService) { }

  saveEstudiante() {
    const studentData = this.formNuevoEstudiante.getStudentData();
    const coursesData = this.tablaNuevoEstudiante.getCoursesData();

    const requestData = {
      estudiante: studentData,
      inscripciones: coursesData
    };

    this.estudianteService.createEstudiante(requestData).subscribe(
      response => {
        console.log('Estudiante creado con éxito', response);
        // Aquí puedes redirigir o mostrar un mensaje de éxito
      },
      error => {
        console.error('Error al crear el estudiante', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    );
  }
}
