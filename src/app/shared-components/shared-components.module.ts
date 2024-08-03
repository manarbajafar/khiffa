import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DeliverymanCardComponent } from './deliveryman-card/deliveryman-card.component';



@NgModule({
  declarations: [
    StatsCardComponent,
    PaginationComponent,
    DeliverymanCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    StatsCardComponent,
    PaginationComponent,
    DeliverymanCardComponent
  ]
})
export class SharedComponentsModule { }
