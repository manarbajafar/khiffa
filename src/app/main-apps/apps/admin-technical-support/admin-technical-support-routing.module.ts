import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalSupportViewComponent } from './technical-support-view/technical-support-view.component';

const routes: Routes = [
  { path:'technical-support-view' , component:TechnicalSupportViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTechnicalSupportRoutingModule { }
