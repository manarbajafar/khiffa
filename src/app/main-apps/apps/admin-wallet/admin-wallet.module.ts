import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWalletRoutingModule } from './admin-wallet-routing.module';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { MoneyTransferRequestsComponent } from './money-transfer-requests/money-transfer-requests.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DeliverymanTransactionsComponent } from './deliveryman-transactions/deliveryman-transactions.component';


@NgModule({
  declarations: [
    WalletViewComponent,
    MoneyTransferRequestsComponent,
    DeliverymanTransactionsComponent
  ],
  imports: [
    CommonModule,
    AdminWalletRoutingModule,
    SharedComponentsModule,
  ]
})
export class AdminWalletModule { }
