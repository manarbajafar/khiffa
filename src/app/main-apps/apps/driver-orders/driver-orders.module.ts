import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverOrdersRoutingModule } from './driver-orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';


@NgModule({
  declarations: [
    OrdersComponent,
    DetailedOrderComponent
  ],
  imports: [
    CommonModule,
    DriverOrdersRoutingModule
  ]
})
export class DriverOrdersModule { }
