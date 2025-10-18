import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EstudianteService } from '../../../../services/estudianteService';

@Component({
  selector: 'app-form-nuevo-estudiante',
  templateUrl: './form-nuevo-estudiante.html',
  styleUrls: ['./form-nuevo-estudiante.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class FormNuevoEstudiante implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private estudianteService: EstudianteService) {
    this.studentForm = this.fb.group({
      codigo: ['', Validators.required],
      tipoDocumento: ['TI', Validators.required],
      numeroDocumento: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      sexo: ['femenino', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telResi: [''],
      celular: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      direccionResidencia: ['', Validators.required],
      ciudadResidencia: ['', Validators.required],
      grado: ['', Validators.required],
      grupo: ['', Validators.required],
      estado: ['en curso', Validators.required]
    });
  }

  ngOnInit(): void {
    this.estudianteService.getNextCodigo().subscribe(nextCodigo => {
      this.studentForm.patchValue({ codigo: nextCodigo });
    });
  }

  getStudentData() {
    return this.studentForm.value;
  }
}
