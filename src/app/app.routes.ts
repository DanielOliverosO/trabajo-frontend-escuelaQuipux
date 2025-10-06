import { Routes } from '@angular/router';
import { Estudiante } from './components/estudiante/estudiante';
import { Grupos } from './components/grupos/grupos';

export const routes: Routes = [
    {path: 'estudiante', component: Estudiante},
    {path: 'grupos', component: Grupos}
];
