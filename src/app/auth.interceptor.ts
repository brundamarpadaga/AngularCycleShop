import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the JWT token from localStorage or your authentication service
    const authToken = localStorage.getItem('token');

    if (request.url.endsWith('/api/auth/token')) {
      // Skip adding the Authorization header for the login request
      return next.handle(request);
    }

    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    }

    // Pass the modified request to the next interceptor or handler
    return next.handle(request);
  }
}
