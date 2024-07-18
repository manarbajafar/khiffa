import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AttachFileComponent } from './attach-file/attach-file.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    ForgetPasswordComponent,
    AttachFileComponent,
    CreateAccountComponent,
    LoginComponent,
    NotFoundComponent,
    OtpCodeComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule // Import ReactiveFormsModule here
  ]
})
export class AuthModule { }
