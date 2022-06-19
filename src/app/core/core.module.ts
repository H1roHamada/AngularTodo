import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpErrorInterceptor } from './interceptor/http-error-interceptor.service';
import { ErrorPageModule } from './pages/error-pages/error-page.module';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [ErrorPageModule],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule {}
