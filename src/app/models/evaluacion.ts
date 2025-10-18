export interface Evaluacion {
  codigo_eval: string;
  codigo_estudiante: string;
  codigo_materia: string;
  // camelCase variants (some backends/serializers may return these)
  codigoEval?: string;
  codigoEstudiante?: string;
  codigoMateria?: string;
  fecha: string;
  grado?: string;
  profesor?: string;
}
