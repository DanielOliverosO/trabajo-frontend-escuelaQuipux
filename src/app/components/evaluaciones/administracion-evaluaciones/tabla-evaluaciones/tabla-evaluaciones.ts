import { Component, inject, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Evaluacion } from '../../../../models/evaluacion';
import { EvaluacionService } from '../../../../services/evaluacionService';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tabla-evaluaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-evaluaciones.html',
  styleUrls: ['./tabla-evaluaciones.css']
})
export class TablaEvaluaciones implements OnInit, OnChanges {
  
     @Input() filters: any;
  private evaluacionService = inject(EvaluacionService);
  public allEvaluaciones: Evaluacion[] = [];
  public filteredEvaluaciones: Evaluacion[] = [];
  public pagedEvaluaciones: Evaluacion[] = [];
  public pageSize: number = 3;
  public currentPage: number = 1;
  public totalPages: number = 0;
  // expose current page slice to template as `evaluaciones`
  public get evaluaciones(): Evaluacion[] {
    return this.pagedEvaluaciones;
  }

  get pages(): number[] {
    const pageGroupSize = 5;
    const startPage = Math.floor((this.currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, this.totalPages);

    if (startPage > this.totalPages) return [];
    return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
  }

  ngOnInit(): void {
    this.evaluacionService.getAllEvaluaciones().subscribe((data: Evaluacion[]) => {
      this.allEvaluaciones = data || [];
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
    if (!this.filters || !this.allEvaluaciones) {
      this.filteredEvaluaciones = this.allEvaluaciones ? this.allEvaluaciones.slice() : [];
    } else {
      // Simple filter: match codigo_estudiante, codigo_materia or grado if provided
      this.filteredEvaluaciones = this.allEvaluaciones.filter(ev => {
        const byEst = !this.filters.codigo_estudiante || ev.codigo_estudiante?.toString() === this.filters.codigo_estudiante.toString();
        const byMat = !this.filters.codigo_materia || ev.codigo_materia?.toString() === this.filters.codigo_materia.toString();
        const byGrado = !this.filters.grado || ev.grado?.toString() === this.filters.grado.toString();
        return byEst && byMat && byGrado;
      });
    }
    this.totalPages = Math.ceil(this.filteredEvaluaciones.length / this.pageSize) || 0;
    this.updatePage();
  }

  private updatePage(): void {
    if (!this.filteredEvaluaciones) return;
    const pageSizeNum = Number(this.pageSize);
    const startIndex = (this.currentPage - 1) * pageSizeNum;
    const endIndex = startIndex + pageSizeNum;
    this.pagedEvaluaciones = this.filteredEvaluaciones.slice(startIndex, endIndex);
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

  public get showingEnd(): number {
    const end = this.currentPage * Number(this.pageSize);
    return end > this.filteredEvaluaciones.length ? this.filteredEvaluaciones.length : end;
  }

}
