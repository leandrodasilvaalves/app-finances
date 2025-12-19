import { Injectable } from '@angular/core';
import { ToastInfoModel } from '@core/models/toastInfo.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: ToastInfoModel[] = []

  show(body: string, options: any = {}): void {
    this.toasts.push({ body, ...options });
  }

  remove(toast: ToastInfoModel): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear(): void {
    this.toasts = [];
  }
}
