import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import { ProfileComponent } from './apps/profile/profile.component';
import { WalletComponent } from './apps/wallet/wallet.component';

import { TicketsComponent } from './apps/tickets/tickets.component';
import { SupportComponent } from './apps/support/support.component';
import { LogoutComponent } from './apps/logout/logout.component';
import { AdminGuard } from '../guard/admin.guard';
import { DeliverymanGuard } from '../guard/deliveryman.guard';

// Add the path for driver-orders which is lazy-loaded
const routes: Routes = [
  {
    path: 'admin-dashboard', canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: 'admin-wallet', canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin-wallet/admin-wallet.module').then(m => m.AdminWalletModule)
  },
  {
    path: 'admin-map', canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin-map/admin-map.module').then(m => m.AdminMapModule)
  },
  {
    path: 'admin-managing-deliveryman', canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin-managing-deliveryman/admin-managing-deliveryman.module').then(m => m.AdminManagingDeliverymanModule)
  },
  {
    path: 'admin-technical-support', canActivate:[AdminGuard],
    loadChildren: () => import('./apps/admin-technical-support/admin-technical-support.module').then(m => m.AdminTechnicalSupportModule)
  },
  {
    path: 'profile', canActivate:[DeliverymanGuard],
    component: ProfileComponent
  },
  {
    path: 'wallet', canActivate:[DeliverymanGuard],
    component: WalletComponent
  },

  {
    path: 'tickets', canActivate:[DeliverymanGuard],
    component: TicketsComponent
  },
  {
    path: 'support', canActivate:[DeliverymanGuard],
    component: SupportComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'driver-orders', canActivate:[DeliverymanGuard],
    loadChildren: () => import('./apps/driver-orders/driver-orders.module').then(m => m.DriverOrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
