import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { AttachFileComponent } from './auth/attach-file/attach-file.component';
import { RestorePasswordRequestComponent } from './auth/restore-password-request/restore-password-request.component';
import { EnterNewPasswordComponent } from './auth/enter-new-password/enter-new-password.component';
import { OtpCodeComponent } from './auth/otp-code/otp-code.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    CreateAccountComponent,
    AttachFileComponent,
    RestorePasswordRequestComponent,
    EnterNewPasswordComponent,
    OtpCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
