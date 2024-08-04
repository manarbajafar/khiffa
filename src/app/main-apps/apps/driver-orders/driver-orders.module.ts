import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DriverOrdersRoutingModule } from './driver-orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    OrdersComponent,
    DetailedOrderComponent
  ],
  imports: [
    CommonModule,
    DriverOrdersRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers:
  [
    DatePipe,

],

})
export class DriverOrdersModule { }
