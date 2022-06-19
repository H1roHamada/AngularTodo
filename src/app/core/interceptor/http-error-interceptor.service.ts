import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  //при срабатывании будет вызываться окно с ошибкой

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            //ошибка 400 (Bad Request) -  Сервер не понимает запрос из-за неверного синтаксиса.
            break;

          case 401:
            //ошибка 401 (Unauthorized) - Нужна аутентификация.
            break;

          case 403:
            //ошибка 403 (Forbidden) -  У клиента нет прав доступа к содержимому.
            break;

          case 404:
            //ошибка 404 (Not Found) - Сервер не может найти запрашиваемый ресурс.
            break;

          case 500:
            //ошибка 500  (Internal Server Error) - Сервер столкнулся с ситуацией, которую он не знает как обработать.
            break;

          default:
            return next.handle(request);
        }
        return [];
      })
    );
  }
}
