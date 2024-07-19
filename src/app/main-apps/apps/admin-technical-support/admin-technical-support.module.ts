import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTechnicalSupportRoutingModule } from './admin-technical-support-routing.module';
import { TechnicalSupportViewComponent } from './technical-support-view/technical-support-view.component';


@NgModule({
  declarations: [
    TechnicalSupportViewComponent
  ],
  imports: [
    CommonModule,
    AdminTechnicalSupportRoutingModule
  ]
})
export class AdminTechnicalSupportModule { }
