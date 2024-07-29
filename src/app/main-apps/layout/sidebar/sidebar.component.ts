import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar_list=[];
  @ViewChild('logoutTemplate') logoutTemplate;

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const user =JSON.parse(localStorage.getItem('user'));

    if(user.user.user_type_id == 1){
    this.sidebar_list = [
    { routerLink: '/apps/admin-dashboard/dashboard-view', label: 'لوحة التحكم', icon: 'bx bxs-dashboard' },
    { routerLink: '/apps/admin-wallet/wallet-view', label: 'المحفظة', icon: 'bx bx-wallet' },
    { routerLink: '/apps/admin-map/map-view', label: 'الخريطة', icon: 'bx bx-map-alt bx-flip-horizontal' },
    { routerLink: '/apps/admin-managing-deliveryman/managing-deliveryman-view', label: 'إدارة المناديب', icon: 'bx bxs-group' },
    { routerLink: '/apps/admin-technical-support/technical-support-view', label: 'تذاكر الدعم الفني', icon: 'bx bx-message-alt-error' },
    { routerLink: '', label: 'تسجيل الخروج', icon: 'bi bi-box-arrow-right', action: 'logout' }
  ];
    }
    if(user.user.user_type_id == 2){
      this.sidebar_list = [
        { routerLink: '/apps/profile', label: 'صفحتي', icon: 'bi bi-person' },
        { routerLink: '/apps/wallet', label: 'المحفظة', icon: 'bi bi-wallet' },
        { routerLink: '/apps/driver-orders/orders', label: 'الطلبات', icon: 'bi bi-card-checklist' },
        { routerLink: '/apps/tickets', label: 'تذاكري', icon: 'bi bi-tools' },
        { routerLink: '', label: 'تسجيل الخروج', icon: 'bi bi-box-arrow-right', action: 'logout'  }
      ];
    }
  }


  test(item: any): void {
    console.log('hi from test');
    if (item.action === 'logout') {
      this.openModal(this.logoutTemplate);
    } else if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }



  // sidebar_list = [
  //   { routerLink: '/apps/admin-dashboard/dashboard-view', label: 'لوحة التحكم', icon: 'bx bxs-dashboard', user_type: [1] },
  //   { routerLink: '/apps/admin-wallet/wallet-view', label: 'المحفظة', icon: 'bx bx-wallet' , user_type: [1]},
  //   { routerLink: '/apps/admin-map/map-view', label: 'الخريطة', icon: 'bx bx-map-alt bx-flip-horizontal' , user_type: [1]},
  //   { routerLink: '/apps/admin-managing-deliveryman/managing-deliveryman-view', label: 'إدارة المناديب', icon: 'bx bxs-group', user_type: [1] },
  //   { routerLink: '/apps/admin-technical-support/technical-support-view', label: 'تذاكر الدعم الفني', icon: 'bx bx-message-alt-error' , user_type: [1]},

  //   { routerLink: '/apps/profile', label: 'صفحتي', icon: 'bi bi-person' , user_type: [2] },
  //   { routerLink: '/apps/wallet', label: 'المحفظة', icon: 'bi bi-wallet' , user_type: [2] },
  //   { routerLink: '/apps/driver-orders/orders', label: 'الطلبات', icon: 'bi bi-card-checklist', user_type: [2]  },
  //   { routerLink: '/apps/tickets', label: 'تذاكري', icon: 'bi bi-tools', user_type: [2]  },
  //   { routerLink: '', label: 'تسجيل خروج', icon: 'bi bi-box-arrow-right', user_type: [1,2]  }
  // ];




  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidebarService.isExpanded;
  }


  openModal(templateRef): void {
    this.modalService.open(templateRef, { size: 'sm' });
  }

  confirmLogout(): void {
    console.log('Logged out successfully.');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.modalService.dismissAll();
    this.router.navigate(['/auth/login']);
}
}
