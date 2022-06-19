import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ApiServicesModule } from './api-services.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { TaskModule } from './feature/task/task.module';
import { TaskGroupsModule } from './feature/task-groups/task-groups.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApiServicesModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    TaskModule,
    TaskGroupsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
