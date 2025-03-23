import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiauthService } from './Service/apiauth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: ApiauthService,  private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      withCredentials: true
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 Unauthorized or 403 Forbidden responses
        if (error.status === 401 || error.status === 403) {
          // Redirect to login page
          // this.router.navigate(['/login']);
          // this.authService.logout().subscribe();
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
