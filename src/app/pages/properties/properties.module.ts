import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertiesNewComponent } from './properties-new/properties-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertiesEditComponent } from './properties-edit/properties-edit.component';
import { PropertiesViewComponent } from './properties-view/properties-view.component';


@NgModule({
  declarations: [
    PropertiesListComponent,
    PropertiesNewComponent,
    PropertiesEditComponent,
    PropertiesViewComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PropertiesModule { }
