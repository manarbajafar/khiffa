import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { CheckTokenGuard } from '../guard/check-token.guard';


const routes: Routes = [

  { path: 'create-account', component : CreateAccountComponent , canActivate:[CheckTokenGuard]},
  { path: 'login', component : LoginComponent , canActivate:[CheckTokenGuard] },
  { path: 'not-found', component : NotFoundComponent },
  { path: 'otp-code', component : OtpCodeComponent , canActivate:[CheckTokenGuard] },
  { path: 'reset-password', component : ResetPasswordComponent, canActivate:[CheckTokenGuard] },
  { path: 'forget-password', component : ForgetPasswordComponent , canActivate:[CheckTokenGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
