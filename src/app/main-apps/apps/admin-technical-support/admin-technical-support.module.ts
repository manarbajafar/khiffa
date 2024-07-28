import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTechnicalSupportRoutingModule } from './admin-technical-support-routing.module';
import { TechnicalSupportViewComponent } from './technical-support-view/technical-support-view.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TechnicalSupportViewComponent,
    TicketInfoComponent
  ],
  imports: [
    CommonModule,
    AdminTechnicalSupportRoutingModule,
    SharedComponentsModule,
    FormsModule,
  ]
})
export class AdminTechnicalSupportModule { }
