import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMapRoutingModule } from './admin-map-routing.module';
import { MapViewComponent } from './map-view/map-view.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    MapViewComponent
  ],
  imports: [
    CommonModule,
    AdminMapRoutingModule,
    LeafletModule
  ]
})
export class AdminMapModule { }
