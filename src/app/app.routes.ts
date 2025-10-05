import { Routes } from '@angular/router';
import { Estudiante } from './estudiante/estudiante';
import { Grupos } from './grupos/grupos';

export const routes: Routes = [
    {path: 'estudiante', component: Estudiante},
    {path: 'grupos', component: Grupos}
];
