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
    // Validación personalizada campo por campo
    const form = this.formNuevoEstudiante.studentForm;
    const missing: string[] = [];
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control && control.invalid) {
        if (control.errors?.['required']) missing.push(key);
        if (control.errors?.['pattern']) missing.push(key + ' (formato)');
        if (control.errors?.['email']) missing.push(key + ' (email)');
      }
    });
    if (missing.length > 0) {
      const err = document.getElementById('saveError');
      if (err) {
        err.textContent = 'Faltan o son inválidos los siguientes campos: ' + missing.join(', ');
        err.style.display = 'inline';
      }
      setTimeout(() => { if (err) err.style.display = 'none'; }, 4000);
      return;
    }

    const studentData = this.formNuevoEstudiante.getStudentData();
    // Solo guardar los cursos que realmente se guardaron con el botón (no el residuo editable)
    let coursesData = Array.isArray(this.tablaNuevoEstudiante.savedCourses) ? this.tablaNuevoEstudiante.savedCourses : [];
    coursesData = coursesData.map(curso => ({
      id: {
        codigoCurso: curso.id?.codigoCurso || curso.codigoCurso,
        codigoEst: studentData.codigo
      },
      grado: curso.grado,
      grupo: curso.grupo,
      notaPromedio: curso.notaPromedio,
      fecha: curso.fecha,
      estado: curso.estado
    }));

    const requestData = {
      estudiante: studentData,
      cursos: coursesData
    };

    this.estudianteService.createEstudiante(requestData).subscribe(
      response => {
        console.log('Estudiante creado con éxito', response);
        try {
          this.formNuevoEstudiante.studentForm.reset();
          window.dispatchEvent(new Event('clearPendingInscripciones'));
          const ok = document.getElementById('saveFeedback');
          const err = document.getElementById('saveError');
          if (ok) { ok.textContent = 'Guardado correctamente'; ok.style.display = 'inline'; }
          if (err) { err.style.display = 'none'; }
          setTimeout(() => { if (ok) ok.style.display = 'none'; }, 3000);
        } catch (e) {}
      },
      error => {
        console.error('Error al crear el estudiante', error);
        const ok = document.getElementById('saveFeedback');
        const err = document.getElementById('saveError');
        if (ok) { ok.style.display = 'none'; }
        if (err) { err.textContent = 'Error al guardar. Verifica los datos.'; err.style.display = 'inline'; }
        setTimeout(() => { if (err) err.style.display = 'none'; }, 4000);
      }
    );
  }
}
