
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin-dashboard',
    loadChildren: () => import('./apps/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },

  {
    path:'admin-wallet',
    loadChildren: () => import('./apps/admin-wallet/admin-wallet.module').then(m => m.AdminWalletModule)
  },

  {
    path:'admin-map',
    loadChildren: () => import('./apps/admin-map/admin-map.module').then(m => m.AdminMapModule)
  },

  {
    path:'admin-managing-deliveryman',
    loadChildren: () => import('./apps/admin-managing-deliveryman/admin-managing-deliveryman.module').then(m => m.AdminManagingDeliverymanModule)
  },

  {
    path:'admin-technical-support',
    loadChildren: () => import('./apps/admin-technical-support/admin-technical-support.module').then(m => m.AdminTechnicalSupportModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
