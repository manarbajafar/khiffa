import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { MoneyTransferRequestsComponent } from './money-transfer-requests/money-transfer-requests.component';

const routes: Routes = [

  { path:'wallet-view' , component: WalletViewComponent},
  { path: 'money-transfer-requests', component: MoneyTransferRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWalletRoutingModule { }
