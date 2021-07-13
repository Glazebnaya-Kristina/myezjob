import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekerHomeRoutingModule } from './jobseeker-home-routing.module';
import { JobseekerHomePageComponent } from '@app/jobseeker-home/pages/jobseeker-home-page/jobseeker-home-page.component';

@NgModule({
  declarations: [
    JobseekerHomePageComponent,
  ],
  imports: [
    CommonModule,
    JobseekerHomeRoutingModule,
  ]
})

export class JobseekerHomeModule { }
