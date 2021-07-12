import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SvgIconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
  ],
  exports: [
    SvgIconComponent
  ]
})

export class SvgIconModule { }
