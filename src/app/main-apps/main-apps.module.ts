import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProfileComponent } from './apps/profile/profile.component';
import { DetailedOrderComponent } from './apps/detailed-order/detailed-order.component';
import { LogoutComponent } from './apps/logout/logout.component';
import { OrdersComponent } from './apps/orders/orders.component';
import { SupportComponent } from './apps/support/support.component';
import { TicketsComponent } from './apps/tickets/tickets.component';
import { WalletComponent } from './apps/wallet/wallet.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    DetailedOrderComponent,
    LogoutComponent,
    OrdersComponent,
    SupportComponent,
    TicketsComponent,
    WalletComponent,

  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule
  ],
  exports:[
    SidebarComponent,
    MainLayoutComponent,
    HeaderComponent,

  ]
})
export class MainAppsModule { }
