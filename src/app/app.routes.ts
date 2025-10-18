import { Routes } from '@angular/router';
import { Estudiante } from './components/estudiante/estudiante';
import { Grupos } from './components/grupos/grupos';
import { Materias } from './components/materias/materias';
import { Evaluaciones } from './components/evaluaciones/evaluaciones';

export const routes: Routes = [
    {path: 'estudiante', component: Estudiante},
    {path: 'grupos', component: Grupos},
    {path: 'evaluaciones', component: Evaluaciones},
    {path: 'materias', component: Materias}
];
