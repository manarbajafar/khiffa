import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMapRoutingModule } from './admin-map-routing.module';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [
    MapViewComponent
  ],
  imports: [
    CommonModule,
    AdminMapRoutingModule
  ]
})
export class AdminMapModule { }
