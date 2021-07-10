import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobseekerHomePageComponent } from '@app/jobseeker-home/pages/jobseeker-home-page/jobseeker-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobseekerHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JobseekerHomeRoutingModule { }
