import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-nuevo-estudiante',
  templateUrl: './tabla-nuevo-estudiante.html',
  styleUrls: ['./tabla-nuevo-estudiante.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class TablaNuevoEstudiante implements OnInit {

  coursesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.coursesForm = this.fb.group({
      courses: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addCourse();
  }

  get courses(): FormArray {
    return this.coursesForm.get('courses') as FormArray;
  }

  newCourse(): FormGroup {
    return this.fb.group({
      codigoCurso: ['', Validators.required],
      fecha: [new Date().getFullYear(), Validators.required],
      grado: ['', Validators.required],
      grupo: ['', Validators.required],
      estado: ['en curso', Validators.required],
      notaPromedio: [null, Validators.required]
    });
  }

  addCourse() {
    this.courses.push(this.newCourse());
  }

  removeCourse(i: number) {
    this.courses.removeAt(i);
  }

  getCoursesData() {
    return this.courses.value.map((course: any) => ({
      id: { codigoCurso: course.codigoCurso },
      ...course
    }));
  }
}
