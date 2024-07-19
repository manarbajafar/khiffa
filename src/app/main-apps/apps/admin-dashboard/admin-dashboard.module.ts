import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';


@NgModule({
  declarations: [
    DashboardViewComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  exports:[DashboardViewComponent]
})
export class AdminDashboardModule { }
