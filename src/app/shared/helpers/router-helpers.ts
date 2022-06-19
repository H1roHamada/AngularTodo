import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Хэлпер для работы с раутами.
 * #### Методы:
 * `routerBack()` используется на страницах с ошибкой для кнопки "назад", делает переход к предыдущей странице, с которой была вызвана ошибка.
 *
 * `navigateToDictionary(link: string)` делает переход к указанному справочнику, в параметр  передается название справочника.
 */

@Injectable({ providedIn: 'root' })
export class RouterHelper {
  constructor(private router: Router) {}

  /**
   * Используется на страницах с ошибкой для перехода к предыдущему URL.
   *
   */
  routeBack() {
    return this.router.navigate([window.location.pathname]);
  }

  navigateToDictionary(link: string) {
    this.router.navigate(['dictionaries', link]);
  }
}
