import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [SideBar, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trabajo-frontend-Daniel-Oliveros');
}
