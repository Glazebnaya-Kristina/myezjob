import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterFooterComponent } from './side-filter-footer.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SideFilterFooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    SideFilterFooterComponent
  ]
})

export class SideFilterFooterModule { }
