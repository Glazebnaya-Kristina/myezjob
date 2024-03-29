import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'jobseeker-home',
      },
      {
        path: 'jobseeker-home',
        data: { page: 'jobseeker-home' },
        loadChildren: () =>
          import('@app/jobseeker-home/jobseeker-home.module').then((m) => m.JobseekerHomeModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DashboardRoutingModule {}
