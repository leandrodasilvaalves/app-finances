import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from '@features/login';
import { CategoriesModule } from '@features/categories';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginModule,
    CategoriesModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Finances');
}
