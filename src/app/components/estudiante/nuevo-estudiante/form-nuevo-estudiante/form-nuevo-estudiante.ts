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
  // celular must be exactly 10 digits
  celular: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
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
    const raw = this.studentForm.value;
    // ensure celular is sent as a digits-only string of length 10 (backend expects \"\\d{10}\")
    if (raw.celular !== undefined && raw.celular !== null) {
      const asStr = String(raw.celular).replace(/[^0-9]/g, '');
      raw.celular = asStr;
    }
    return raw;
  }
}
