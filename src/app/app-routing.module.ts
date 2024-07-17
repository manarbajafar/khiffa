import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachFileComponent } from './auth/attach-file/attach-file.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { EnterNewPasswordComponent } from './auth/enter-new-password/enter-new-password.component';
import { RestorePasswordRequestComponent } from './auth/restore-password-request/restore-password-request.component';
import { OtpCodeComponent } from './auth/otp-code/otp-code.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component : LoginComponent },
  { path: 'auth/attach-file', component : AttachFileComponent },
  { path: 'auth/create-account', component : CreateAccountComponent },
  { path: 'auth/login', component : LoginComponent },
  { path: 'auth/not-found', component : NotFoundComponent },
  { path: 'auth/otp-code', component : OtpCodeComponent },
  { path: 'auth/enter-new-password', component : EnterNewPasswordComponent },
  { path: 'auth/restore-password-request', component : RestorePasswordRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


