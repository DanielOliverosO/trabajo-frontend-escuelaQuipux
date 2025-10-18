import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-admin-estudiante',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-estudiante.html',
  styleUrl: './admin-estudiante.css'
})
export class AdminEstudiante implements OnInit {
  @Output() search = new EventEmitter<any>();
  public filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      grado: [''],
      grupo: [''],
      tipoDocumento: [''],
      numeroDocumento: [''],
      estudiante: ['']
    });
  }

  ngOnInit(): void {
  }

  public onSearch(): void {
    this.search.emit(this.filterForm.value);
  }

  public clearFilters(): void {
    this.filterForm.reset({
      grado: '',
      grupo: '',
      tipoDocumento: '',
      numeroDocumento: '',
      estudiante: ''
    });
    this.search.emit(this.filterForm.value);
  }
}
