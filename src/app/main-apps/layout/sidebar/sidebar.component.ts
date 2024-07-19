import { Component, OnInit,EventEmitter, Output, HostListener, HostBinding } from '@angular/core';
import { SidebarService } from './sidebar.service';



interface SidebarToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSidebar: EventEmitter<SidebarToggle>=new EventEmitter();

  collapsed = false;
  screenWidth=0;

  sidebar_list = [
    { routerLink: '/apps/admin-dashboard/dashboard-view', label: 'لوحة التحكم', icon: 'bx bxs-dashboard' },
    { routerLink: '/apps/admin-wallet/wallet-view', label: 'المحفظة', icon: 'bx bx-wallet' },
    { routerLink: '/apps/admin-map/map-view', label: 'الخريطة', icon: 'bx bx-map-alt bx-flip-horizontal' },
    { routerLink: '/apps/admin-managing-deliveryman/managing-deliveryman-view', label: 'إدارة المناديب', icon: 'bx bx-cog' },
    { routerLink: '/apps/admin-technical-support/technical-support-view', label: 'تذاكر الدعم الفني', icon: 'bx bx-message-alt-error' },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth <=768){
      this.collapsed=false;
      this.onToggleSidebar.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
    }
  }
  constructor(public sidebarService: SidebarService) {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidebarService.isExpanded;
  }


  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
   }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  closeSidebar() {
    this.collapsed = false;
    this.onToggleSidebar.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }
}
