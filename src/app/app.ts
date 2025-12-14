import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '@core';
import { FeaturesModule } from '@features';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FeaturesModule,
    CoreModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Finances');
}
