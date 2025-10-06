import { Injectable } from '@angular/core';
import { Estudiante } from "../models/estudiante";

@Injectable({ providedIn: 'root' })
export class EstudianteService {
    public estudiantes: Estudiante[] = []; 
    
    public getEstudiantes(){
        this.estudiantes = [
  {
    codigo: '2022101',
    tipoDocumento: 'TI',
    numeroDocumento: '1088123456',
    primerNombre: 'Camila',
    primerApellido: 'Fernandez',
    segundoApellido: 'Rojas',
    sexo: 'femenino',
    fechaNacimiento: '2007-03-15',
    celular: '3001112233',
    correoElectronico: 'camila.fernandez@colegio.com',
    direccionResidencia: 'Cra 45 #12-34 Piso 2',
    ciudadResidencia: 'Medellín',
    grado: '10',
    grupo: 'A',
    estado: 'reprobado'
  },
  {
    codigo: '2022102',
    tipoDocumento: 'TI',
    numeroDocumento: '1088123499',
    primerNombre: 'Juan',
    segundoNombre: 'Felipe',
    primerApellido: 'Montoya',
    segundoApellido: 'Rios',
    sexo: 'masculino',
    fechaNacimiento: '2006-11-02',
    celular: '3002223344',
    correoElectronico: 'juan.montoya@colegio.com',
    direccionResidencia: 'Calle 20 #10-45',
    ciudadResidencia: 'Medellín',
    grado: '10',
    grupo: 'A',
    estado: 'aprobado'
  },
  {
    codigo: '2022103',
    tipoDocumento: 'TI',
    numeroDocumento: '1089456789',
    primerNombre: 'Luisa',
    segundoNombre: 'Maria',
    primerApellido: 'Cruz',
    segundoApellido: 'Hernandez',
    sexo: 'femenino',
    fechaNacimiento: '2007-07-25',
    celular: '3013334455',
    correoElectronico: 'luisa.cruz@colegio.com',
    direccionResidencia: 'Carrera 50 #23-12',
    ciudadResidencia: 'Envigado',
    grado: '10',
    grupo: 'B',
    estado: 'aprobado'
  },
  {
    codigo: '2022104',
    tipoDocumento: 'TI',
    numeroDocumento: '1088120099',
    primerNombre: 'Ana',
    segundoNombre: 'Maria',
    primerApellido: 'Bedoya',
    segundoApellido: 'Hernandez',
    sexo: 'femenino',
    fechaNacimiento: '2007-05-11',
    celular: '3024445566',
    correoElectronico: 'ana.bedoya@colegio.com',
    direccionResidencia: 'Calle 33 #55-21',
    ciudadResidencia: 'Bello',
    grado: '10',
    grupo: 'B',
    estado: 'aprobado'
  },
  {
    codigo: '2022105',
    tipoDocumento: 'TI',
    numeroDocumento: '1087013499',
    primerNombre: 'Santiago',
    primerApellido: 'Sanchez',
    segundoApellido: 'Rivera',
    sexo: 'masculino',
    fechaNacimiento: '2006-12-10',
    celular: '3035556677',
    correoElectronico: 'santiago.sanchez@colegio.com',
    direccionResidencia: 'Transversal 15 #40-88',
    ciudadResidencia: 'Itagüí',
    grado: '10',
    grupo: 'A',
    estado: 'reprobado'
  }
];
        return this.estudiantes;
    }
}