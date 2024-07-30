import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 400) {

      }
      if (err.status === 401) {

      }
      if (err.status === 403) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        //navigate to login?
      }
      if (err.status === 422) {

      }
      if (err.status === 429) {

      }
      if (err.status === 500) {

      }
      return throwError(err);
    }))
  }

}
