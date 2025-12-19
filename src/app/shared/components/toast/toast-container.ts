import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '@core/services/toast/toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toast-container',
  imports: [
    CommonModule,
    NgbToastModule,
  ],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss',
})
export class ToastContainer {
  service = inject(ToastService)
}
