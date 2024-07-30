import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminManagingDeliverymanRoutingModule } from './admin-managing-deliveryman-routing.module';
import { ManagingDeliverymanViewComponent } from './managing-deliveryman-view/managing-deliveryman-view.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DeliverymanListComponent } from './deliveryman-list/deliveryman-list.component';
import { DeliverymanRequestsComponent } from './deliveryman-requests/deliveryman-requests.component';
import { AllDeliverymanListComponent } from './all-deliveryman-list/all-deliveryman-list.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { AllDeliverymanRequestsComponent } from './all-deliveryman-requests/all-deliveryman-requests.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ManagingDeliverymanViewComponent,
    DeliverymanListComponent,
    DeliverymanRequestsComponent,
    AllDeliverymanListComponent,
    AllDeliverymanRequestsComponent,
    RequestDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminManagingDeliverymanRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
  ]
  , providers: [UserService],
})
export class AdminManagingDeliverymanModule { }
