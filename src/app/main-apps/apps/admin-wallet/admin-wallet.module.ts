import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWalletRoutingModule } from './admin-wallet-routing.module';
import { WalletViewComponent } from './wallet-view/wallet-view.component';


@NgModule({
  declarations: [
    WalletViewComponent
  ],
  imports: [
    CommonModule,
    AdminWalletRoutingModule
  ]
})
export class AdminWalletModule { }
