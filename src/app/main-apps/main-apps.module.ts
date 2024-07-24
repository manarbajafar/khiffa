import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProfileComponent } from './apps/profile/profile.component';

import { LogoutComponent } from './apps/logout/logout.component';
import { SupportComponent } from './apps/support/support.component';
import { TicketsComponent } from './apps/tickets/tickets.component';
import { WalletComponent } from './apps/wallet/wallet.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,

    LogoutComponent,

    SupportComponent,
    TicketsComponent,
    WalletComponent,
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule,
    ReactiveFormsModule, // Add this
    FormsModule, // Add this
  ],
  exports: [
    SidebarComponent,
    MainLayoutComponent,
    HeaderComponent,
  ],
})
export class MainAppsModule { }
