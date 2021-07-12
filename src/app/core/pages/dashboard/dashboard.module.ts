import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {SideFiltersPageModule} from '@app/core/pages/side-filters-page/side-filters-page.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SideFiltersPageModule,
  ]
})

export class DashboardModule { }
