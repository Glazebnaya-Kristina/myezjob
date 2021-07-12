import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterFormComponent } from './side-filter-form.component';
import {SideFilterHeaderModule} from "@app/core/components/side-filter-header/side-filter-header.module";



@NgModule({
  declarations: [
    SideFilterFormComponent
  ],
    imports: [
        CommonModule,
        SideFilterHeaderModule
    ],
  exports: [
    SideFilterFormComponent
  ]
})
export class SideFilterFormModule { }
