import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { FeaturesModule } from '@features';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FeaturesModule,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Finances');
}
