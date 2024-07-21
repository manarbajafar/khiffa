import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';
import { RouterModule } from '@angular/router';
import { StatsCardComponent } from './stats-card/stats-card.component';



@NgModule({
  declarations: [
    SidebarLinkComponent,
    StatsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    StatsCardComponent,
  ]
})
export class SharedComponentsModule { }
