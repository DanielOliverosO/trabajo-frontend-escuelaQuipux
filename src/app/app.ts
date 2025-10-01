import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Estudiante } from './estudiante/estudiante';

@Component({
  selector: 'app-root',
  imports: [Estudiante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trabajo-frontend-Daniel-Oliveros');
}
