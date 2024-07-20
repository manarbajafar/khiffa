import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardViewComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
  ],
  exports:[DashboardViewComponent]
})
export class AdminDashboardModule { }
