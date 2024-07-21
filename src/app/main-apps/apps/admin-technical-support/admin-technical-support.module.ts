import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTechnicalSupportRoutingModule } from './admin-technical-support-routing.module';
import { TechnicalSupportViewComponent } from './technical-support-view/technical-support-view.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    TechnicalSupportViewComponent
  ],
  imports: [
    CommonModule,
    AdminTechnicalSupportRoutingModule,
    SharedComponentsModule,
  ]
})
export class AdminTechnicalSupportModule { }
