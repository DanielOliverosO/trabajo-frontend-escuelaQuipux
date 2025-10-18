import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante, Inscripcion } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'http://localhost:8080/estudiantes';

  constructor(private http: HttpClient) { }

  getAllEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/getEstudiante`);
  }

  getNextCodigo(): Observable<string> {
    return this.http.get(`${this.apiUrl}/nextCodigo`, { responseType: 'text' });
  }

  // backend expects a payload with 'estudiante' and 'cursos' fields
  createEstudiante(data: { estudiante: Estudiante, cursos: any[] }): Observable<any> {
    return this.http.post(`${this.apiUrl}/postEstudiante`, data);
  }
}
