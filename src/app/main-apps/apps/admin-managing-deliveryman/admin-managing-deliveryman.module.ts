import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagingDeliverymanRoutingModule } from './admin-managing-deliveryman-routing.module';
import { ManagingDeliverymanViewComponent } from './managing-deliveryman-view/managing-deliveryman-view.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    ManagingDeliverymanViewComponent
  ],
  imports: [
    CommonModule,
    AdminManagingDeliverymanRoutingModule,
    SharedComponentsModule,
  ]
})
export class AdminManagingDeliverymanModule { }
