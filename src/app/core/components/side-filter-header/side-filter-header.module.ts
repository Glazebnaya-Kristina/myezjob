import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterHeaderComponent } from './side-filter-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SideFilterHeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    SideFilterHeaderComponent
  ]
})

export class SideFilterHeaderModule { }
