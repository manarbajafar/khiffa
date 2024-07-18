import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

    { path:'', redirectTo:'/auth/login', pathMatch:'full'},

// redirect to system
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  //   {
  //   path:'apps', component: MainLayoutComponent,
  //   loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule),

  //   // canActivate:[JMBHJGJHG] //to know user type
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


