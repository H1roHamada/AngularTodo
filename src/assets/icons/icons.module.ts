import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconAddComponent } from './icon-add/icon-add.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconCloseComponent } from './icon-close/icon-close.component';

@NgModule({
  declarations: [
    IconEditComponent,
    IconDeleteComponent,
    IconAddComponent,
    IconListComponent,
    IconCloseComponent,
  ],
  imports: [CommonModule],
  exports: [
    IconEditComponent,
    IconDeleteComponent,
    IconAddComponent,
    IconListComponent,
    IconCloseComponent,
  ],
})
export class IconsModule {}
