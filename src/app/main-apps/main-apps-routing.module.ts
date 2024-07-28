import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import { ProfileComponent } from './apps/profile/profile.component';
import { WalletComponent } from './apps/wallet/wallet.component';

import { TicketsComponent } from './apps/tickets/tickets.component';
import { SupportComponent } from './apps/support/support.component';

import { EditProfileComponent } from './apps/edit-profile/edit-profile.component';
import { DriverTicketAnswerComponent } from './apps/driver-ticket-answer/driver-ticket-answer.component';
import { DriverActivateComponent } from './apps/driver-activate/driver-activate.component';

// Add the path for driver-orders which is lazy-loaded
const routes: Routes = [
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./apps/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: 'admin-wallet',
    loadChildren: () => import('./apps/admin-wallet/admin-wallet.module').then(m => m.AdminWalletModule)
  },
  {
    path: 'admin-map',
    loadChildren: () => import('./apps/admin-map/admin-map.module').then(m => m.AdminMapModule)
  },
  {
    path: 'admin-managing-deliveryman',
    loadChildren: () => import('./apps/admin-managing-deliveryman/admin-managing-deliveryman.module').then(m => m.AdminManagingDeliverymanModule)
  },
  {
    path: 'admin-technical-support',
    loadChildren: () => import('./apps/admin-technical-support/admin-technical-support.module').then(m => m.AdminTechnicalSupportModule)
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },

  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },

  { path: 'edit-profile',
    component: EditProfileComponent },
    {
    path:'driver-ticket-answer',
    component: DriverTicketAnswerComponent
    },
    { path: 'driver-ticket-answer', component: DriverTicketAnswerComponent },
    {
      path: 'driver-activate',
      component: DriverActivateComponent
    },
  {
    path: 'driver-orders',
    loadChildren: () => import('./apps/driver-orders/driver-orders.module').then(m => m.DriverOrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
