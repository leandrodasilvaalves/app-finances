import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Navbar } from '@core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Finances');
}
