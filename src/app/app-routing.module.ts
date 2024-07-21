import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';
import { SidebarComponent } from './main-apps/layout/sidebar/sidebar.component';
const routes: Routes = [

  // { path:'', redirectTo:'/auth/login', pathMatch:'full'},
  {
     path: '', redirectTo: 'apps/admin-dashboard/dashboard-view',
      pathMatch: 'full' },


  // redirect to system
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'apps', component: MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule),
    // canActivate:[JMBHJGJHG] //to identfy user type
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


