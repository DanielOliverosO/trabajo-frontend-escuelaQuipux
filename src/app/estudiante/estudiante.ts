import { Component } from '@angular/core';
import { SideBar } from '../side-bar/side-bar';
import { Header } from '../header/header';
import { AdministracionEstudiante } from "./administracion-estudiante/administracion-estudiante";
import { NgIf } from "@angular/common";
import { NuevoEstudiante } from "./nuevo-estudiante/nuevo-estudiante";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-estudiante',
  imports: [SideBar, Header, AdministracionEstudiante, NgIf, NuevoEstudiante],
  templateUrl: './estudiante.html',
  styleUrl: './estudiante.css'
})
export class Estudiante {
  public nuevoEstudiante: boolean = false;
  mostFormNuevEstu(){
    this.nuevoEstudiante = true;
  }
  mostFormNuevBusq(){
    this.nuevoEstudiante = false;
  }
}