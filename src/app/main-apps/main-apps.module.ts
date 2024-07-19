import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BodyComponent } from './layout/body/body.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule
  ],
  exports:[
    SidebarComponent,
    MainLayoutComponent,
    HeaderComponent,
    BodyComponent,
  ]
})
export class MainAppsModule { }
