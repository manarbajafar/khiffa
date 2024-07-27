import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { MainAppsModule } from './main-apps/main-apps.module';
import { AdminDashboardModule } from "./main-apps/apps/admin-dashboard/admin-dashboard.module";
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    AuthModule,
    MainAppsModule,
    AdminDashboardModule,
    SharedComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
],
  providers:
  [
    DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
