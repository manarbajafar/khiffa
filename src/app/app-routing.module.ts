import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';
import { SidebarComponent } from './main-apps/layout/sidebar/sidebar.component';
import { SplashScreenComponent } from './auth/splash-screen/splash-screen.component';
import { CheckTokenGuard } from './guard/check-token.guard';
const routes: Routes = [

  //  { path:'', redirectTo:'/auth/splash-screen', pathMatch:'full'},
  { path: '', component: SplashScreenComponent },

  // { path: '', redirectTo: 'auth/login',pathMatch: 'full' },


  // redirect to system
  {
    path: 'auth', canActivate:[CheckTokenGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'apps', component: MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule),
    // canActivate:[JMBHJGJHG] //to identfy user type
  },

  { path:'**', redirectTo:'auth/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


