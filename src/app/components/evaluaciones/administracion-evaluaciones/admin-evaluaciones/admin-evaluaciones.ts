import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-admin-evaluaciones',
  imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-evaluaciones.html',
  styleUrl: './admin-evaluaciones.css'
})
export class AdminEvaluaciones {
  @Output() search = new EventEmitter<any>();
  public filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      codigo_estudiante: [''],
      codigo_materia: [''],
      fecha: [''],
      grado: [''],
      profesor: ['']
    });
  }

  ngOnInit(): void {
  }

  public onSearch(): void {
    this.search.emit(this.filterForm.value);
  }

  public clearFilters(): void {
    this.filterForm.reset({
      codigo_estudiante: '',
      codigo_materia: '',
      fecha: '',
      grado: '',
      profesor: ''
    });
    this.search.emit(this.filterForm.value);
  }
}
