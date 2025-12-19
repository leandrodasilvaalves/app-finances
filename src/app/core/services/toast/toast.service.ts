import { Injectable } from '@angular/core';
import { ToastInfoModel } from '@core/models/toastInfo.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: ToastInfoModel[] = []

  show(body: string, header?: string, classname?: string, delay?: number): void {
    this.toasts.push({
      body,
      header,
      classname: classname ?? 'bg-info text-light',
      delay
    });
  }

  info(body: string, header?: string, delay?: number): void {
    this.show(body, header, 'bg-info text-light', delay);
  }

  success(body: string, header?: string, delay?: number): void {
    this.show(body, header, 'bg-success text-light', delay);
  }

  warning(body: string, header?: string, delay?: number): void {
    this.show(body, header, 'bg-warning text-light', delay);
  }

  danger(body: string, header?: string, delay?: number): void {
    this.show(body, header, 'bg-danger text-light', delay);
  }

  remove(toast: ToastInfoModel): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear(): void {
    this.toasts = [];
  }
}
