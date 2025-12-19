import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Navbar } from '@core';
import { ToastContainer } from '@shared/components/toast/toast-container';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    ToastContainer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Finances');
}
