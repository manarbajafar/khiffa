import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('logoutTemplate') logoutTemplate;
  @ViewChild('regionTemplate') regionTemplate;


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
    {  label: 'تسجيل الخروج', icon: 'bi bi-box-arrow-right', action: 'logout' }
  ];
    }
    if(user.user.user_type_id == 2){
      this.sidebar_list = [
        { routerLink: '/apps/profile', label: 'صفحتي', icon: 'bi bi-person' },
        { routerLink: '/apps/wallet', label: 'المحفظة', icon: 'bi bi-wallet' },
        { routerLink: '/apps/driver-orders/orders', label: 'الطلبات', icon: 'bi bi-card-checklist' },
        { routerLink: '/apps/tickets', label: 'تذاكري', icon: 'bi bi-tools' },
        {  label: 'تسجيل الخروج', icon: 'bi bi-box-arrow-right', action: 'logout'  }
      ];
    }
  }


  //need to modify
  test(item: any): void {
    if (item.action === 'logout') {
      this.openModal(this.logoutTemplate);
    } else if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }





  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidebarService.isExpanded;
  }


  test(item: any): void {
    if (item.action === 'logout') {
      this.openModal(this.logoutTemplate);
    } else if (item.action === 'region') {
      this.openModal(this.regionTemplate);
    } else if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }

  openModal(templateRef): void {
    this.modalService.open(templateRef, { size: 'sm' });
  }

  confirmLogout(): void {
    console.log('Logged out successfully.');
    localStorage.removeItem
    this.router.navigate(['/auth/login']);
    this.modalService.dismissAll();
}


  confirmRegionSelection(): void {
    if (this.selectedRegion) {
      this.modalService.dismissAll();  // Close the modal
      console.log('Region selected:', this.selectedRegion);
      // Navigate to the orders page with the selected region as a query parameter
      this.router.navigate(['/apps/driver-orders/orders'], { queryParams: { region: this.selectedRegion } });
    } else {
      // Optionally handle the case where no region has been selected
      console.log('No region selected');
    }
  }}
