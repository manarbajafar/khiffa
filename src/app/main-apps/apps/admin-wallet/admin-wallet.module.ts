import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWalletRoutingModule } from './admin-wallet-routing.module';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { MoneyTransferRequestsComponent } from './money-transfer-requests/money-transfer-requests.component';


@NgModule({
  declarations: [
    WalletViewComponent,
    MoneyTransferRequestsComponent
  ],
  imports: [
    CommonModule,
    AdminWalletRoutingModule
  ]
})
export class AdminWalletModule { }
