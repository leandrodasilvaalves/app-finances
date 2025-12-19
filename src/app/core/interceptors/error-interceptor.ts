import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from '@core/services/toast/toast.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(ToastService);
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro inesperado';

      if (error.status === 0) {
        errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
      } else if (error.status === 404) {
        errorMessage = 'O recurso solicitado não foi encontrado (404).';
      }
      else if (error.status >= 500) {
        errorMessage = 'Erro no servidor. Tente novamente mais tarde (500).';
      }
      else if (error.error?.message) {
        errorMessage = error.error.message;
      }

      service.show(errorMessage, {
        classname: 'bg-danger text-light',
        delay: 5000,
        header: 'Erro de API'
      });
      return throwError(() => error);
    })
  );
};
