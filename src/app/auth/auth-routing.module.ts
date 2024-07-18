import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AttachFileComponent } from './attach-file/attach-file.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [

  { path: 'attach-file', component : AttachFileComponent },
  { path: 'create-account', component : CreateAccountComponent },
  { path: 'login', component : LoginComponent },
  { path: 'not-found', component : NotFoundComponent },
  { path: 'otp-code', component : OtpCodeComponent },
  { path: 'reset-password', component : ResetPasswordComponent },
  { path: 'forget-password', component : ForgetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
