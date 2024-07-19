import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagingDeliverymanRoutingModule } from './admin-managing-deliveryman-routing.module';
import { ManagingDeliverymanViewComponent } from './managing-deliveryman-view/managing-deliveryman-view.component';


@NgModule({
  declarations: [
    ManagingDeliverymanViewComponent
  ],
  imports: [
    CommonModule,
    AdminManagingDeliverymanRoutingModule
  ]
})
export class AdminManagingDeliverymanModule { }
