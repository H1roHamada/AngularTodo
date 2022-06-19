import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Хелпер для работы с фейковыми данными.
 * #### Методы:
 * `delayedValue<T>(value?: T): Observable<T>` возвращает фэйковые значения с задержкой (default = 250ms).
 */

@Injectable({ providedIn: 'root' })
export class StubHelper {
  constructor() {}
  /**
   * Используется для подгрузки фэйковых данных с задержкой (default = 250ms)
   */
  delayedValue<T>(value?: T): Observable<T> {
    return of(value).pipe(delay(250));
  }
}
