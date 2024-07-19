import { Component, OnInit } from '@angular/core';

//he make this in app
interface SidebarToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isSidebarVisible=true;

  constructor() { }

  ngOnInit(): void {
  }

  isSidebarCollapsed=false;
  screenWidth=0;

  onToggleSidebar(data: SidebarToggle): void {
    this.screenWidth=data.screenWidth;
    this.isSidebarCollapsed=data.collapsed;
  }

}
