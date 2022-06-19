import { NgModule } from '@angular/core';
import { AccessDeniedPageComponent } from './components/access-denied-page/access-denied-page.component';
import { BadRequestPageComponent } from './components/bad-request-page/bad-request-page.component';
import { InternalServerErrorComponent } from './components/internal-server-error-page/internal-server-error-page.component';
import { LockedPageComponent } from './components/locked-page/locked-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UnauthorizationPageComponent } from './components/unauthorization-page/unauthorization-page.component';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  imports: [],
  exports: [
    ErrorPageComponent,
    AccessDeniedPageComponent,
    BadRequestPageComponent,
    InternalServerErrorComponent,
    LockedPageComponent,
    UnauthorizationPageComponent,
    NotFoundPageComponent,
  ],
  declarations: [
    ErrorPageComponent,
    AccessDeniedPageComponent,
    BadRequestPageComponent,
    InternalServerErrorComponent,
    LockedPageComponent,
    UnauthorizationPageComponent,
    NotFoundPageComponent,
  ],
  providers: [],
})
export class ErrorPageModule {}
