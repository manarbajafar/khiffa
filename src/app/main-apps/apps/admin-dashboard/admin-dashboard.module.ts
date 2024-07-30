import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DashboardViewComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //to use stat card
    SharedComponentsModule,

    //to use date picker
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,

    //charts


],
  exports:[DashboardViewComponent]
})
export class AdminDashboardModule { }
