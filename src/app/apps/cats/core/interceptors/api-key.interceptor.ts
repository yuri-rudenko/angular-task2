import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isCatApi = req.url.includes('thecatapi.com');

    if (isCatApi) {
      const newReq = req.clone({
        url: req.url.includes('?')
          ? `${req.url}&api_key=${environment.catApiKey}`
          : `${req.url}?api_key=${environment.catApiKey}`
      });
      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
