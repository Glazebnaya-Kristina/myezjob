import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideFiltersPageComponent } from './side-filters-page.component';
import {SideFilterFormModule} from "@app/core/components/side-filter-form/side-filter-form.module";


@NgModule({
  declarations: [
    SideFiltersPageComponent
  ],
  imports: [
    CommonModule,
    SideFilterFormModule,
  ],
  exports: [
    SideFiltersPageComponent
  ]
})
export class SideFiltersPageModule { }
