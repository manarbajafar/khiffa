import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { MainAppsModule } from './main-apps/main-apps.module';
import { AdminDashboardModule } from "./main-apps/apps/admin-dashboard/admin-dashboard.module";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    AuthModule, //
    MainAppsModule,
    AdminDashboardModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
