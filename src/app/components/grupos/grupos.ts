import { Component } from '@angular/core';
import { FiltGrupos } from "./filt-grupos/filt-grupos";
import { ListaGrupos } from "./lista-grupos/lista-grupos";

@Component({
  selector: 'app-grupos',
  imports: [FiltGrupos, ListaGrupos],
  templateUrl: './grupos.html',
  styleUrl: './grupos.css'
})
export class Grupos {

}
