import { Component, inject, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DialogElimEstu } from './dialog-elim-estu/dialog-elim-estu';
import { MatDialog } from '@angular/material/dialog';
import { Estudiante } from '../../../../models/estudiante';
import { EstudianteService } from '../../../../services/estudianteService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-estudiante',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './result-estudiante.html',
  styleUrl: './result-estudiante.css'
})
export class ResultEstudiante implements OnInit, OnChanges {
  @Input() filters: any;
  public estudianteService = inject(EstudianteService);
  public allEstudiantes: Estudiante[] = [];
  public estudiantes: Estudiante[] = [];
  public pagedEstudiantes: Estudiante[] = [];
  public pageSize: number = 3;
  public currentPage: number = 1;
  public totalPages: number = 0;
  readonly dialog = inject(MatDialog);

  get pages(): number[] {
    const pageGroupSize = 5;
    const startPage = Math.floor((this.currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, this.totalPages);

    if (startPage > this.totalPages) return [];
    return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
  }

  ngOnInit(): void {
    this.estudianteService.getAllEstudiantes().subscribe((data: Estudiante[]) => {
      this.allEstudiantes = data;
      this.applyFilters();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters']) {
      this.currentPage = 1;
      this.applyFilters();
    }
  }

  private applyFilters(): void {
    if (!this.filters || !this.allEstudiantes) {
      this.estudiantes = this.allEstudiantes ? this.allEstudiantes.slice() : [];
    } else {
      this.estudiantes = this.allEstudiantes.filter(est => {
        const gradoMatch = !this.filters.grado || est.grado?.toString() === this.filters.grado;
        const grupoMatch = !this.filters.grupo || est.grupo?.toUpperCase() === this.filters.grupo.toUpperCase();
        const tipoDocMatch = !this.filters.tipoDocumento || est.tipoDocumento?.toUpperCase() === this.filters.tipoDocumento.toUpperCase();
        const numDocMatch = !this.filters.numeroDocumento || est.numeroDocumento?.toString().includes(this.filters.numeroDocumento);

        const nombreCompleto = `${est.primerNombre} ${est.segundoNombre || ''} ${est.primerApellido} ${est.segundoApellido}`.toLowerCase();
        const estudianteMatch = !this.filters.estudiante || nombreCompleto.includes(this.filters.estudiante.toLowerCase());

        return gradoMatch && grupoMatch && tipoDocMatch && numDocMatch && estudianteMatch;
      });
    }
    this.totalPages = Math.ceil(this.estudiantes.length / this.pageSize);
    this.updatePage();
  }

  private updatePage(): void {
    if (!this.estudiantes) return;
    const pageSizeNum = Number(this.pageSize);
    const startIndex = (this.currentPage - 1) * pageSizeNum;
    const endIndex = startIndex + pageSizeNum;
    this.pagedEstudiantes = this.estudiantes.slice(startIndex, endIndex);
  }

  public onPageSizeChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  public onPageChange(page: number): void {
    const pageGroupSize = 5;
    const currentBlockStart = Math.floor((this.currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
    const currentBlockEnd = Math.min(currentBlockStart + pageGroupSize - 1, this.totalPages);

    let targetPage = page;

    if (page === currentBlockEnd && page < this.totalPages) {
      targetPage = page + 1;
    } else if (page === currentBlockStart && page > 1) {
      targetPage = page - 1;
    }

    this.currentPage = targetPage;
    this.updatePage();
  }

  openDialog() {
    this.dialog.open(DialogElimEstu);
  }
}