import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagingDeliverymanViewComponent } from './managing-deliveryman-view/managing-deliveryman-view.component';
import { AllDeliverymanListComponent } from './all-deliveryman-list/all-deliveryman-list.component';
import { DeliverymanListComponent } from './deliveryman-list/deliveryman-list.component';
import { DeliverymanRequestsComponent } from './deliveryman-requests/deliveryman-requests.component';
import { AllDeliverymanRequestsComponent } from './all-deliveryman-requests/all-deliveryman-requests.component';
import { RequestDetailsComponent } from './request-details/request-details.component';


const routes: Routes = [

  { path:'managing-deliveryman-view' , component:ManagingDeliverymanViewComponent},
  { path:'all-deliveryman-list' , component:AllDeliverymanListComponent},
  { path:'deliveryman-list' , component:DeliverymanListComponent},
  { path:'deliveryman-requests' , component:DeliverymanRequestsComponent},
  { path:'all-deliveryman-requests' , component:AllDeliverymanRequestsComponent},
  { path:'request-details' , component:  RequestDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class AdminManagingDeliverymanRoutingModule { }
