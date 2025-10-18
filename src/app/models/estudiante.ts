export interface Estudiante {
  codigo: string;
  tipoDocumento: 'TI' | 'CC'| 'CE';
  numeroDocumento: string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  sexo: 'femenino' | 'masculino';
  fechaNacimiento: string;
  telResi?: string;
  celular: string;
  correoElectronico: string;
  direccionResidencia: string;
  ciudadResidencia: string;
  grado: string;
  grupo: string;
  estado: 'aprobado' | 'reprobado' | 'en curso';
  inscripciones?: Inscripcion[];
}

export interface Inscripcion {
  id: { codigoCurso: string; };
  grado: string;
  grupo: string;
  notaPromedio: number | null;
  fecha: number;
  estado: string;
}