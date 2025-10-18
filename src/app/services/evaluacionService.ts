import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluacion } from '../models/evaluacion';

@Injectable({ providedIn: 'root' })
export class EvaluacionService {
  private apiUrl = 'http://localhost:8080/evaluaciones';

  constructor(private http: HttpClient) {}

  getAllEvaluaciones(): Observable<Evaluacion[]> {
    return this.http.get<Evaluacion[]>(`${this.apiUrl}/getEvaluaciones`);
  }

  createEvaluacion(evaluacion: Evaluacion): Observable<any> {
    return this.http.post(`${this.apiUrl}/postEvaluacion`, evaluacion);
  }

  filterEvaluaciones(params: any): Observable<Evaluacion[]> {
    return this.http.get<Evaluacion[]>(`${this.apiUrl}/filter`, { params });
  }
}
