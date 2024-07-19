import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagingDeliverymanViewComponent } from './managing-deliveryman-view/managing-deliveryman-view.component';

const routes: Routes = [

  { path:'managing-deliveryman-view' , component:ManagingDeliverymanViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagingDeliverymanRoutingModule { }
