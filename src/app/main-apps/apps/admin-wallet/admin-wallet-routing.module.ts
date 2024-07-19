import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletViewComponent } from './wallet-view/wallet-view.component';

const routes: Routes = [

  { path:'wallet-view' , component:WalletViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWalletRoutingModule { }
