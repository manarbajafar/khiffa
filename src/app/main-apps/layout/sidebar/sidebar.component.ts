import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from './sidebar.service';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { AUTH } from 'src/app/constant/routes';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('logoutTemplate') logoutTemplate;
  @ViewChild('regionTemplate') regionTemplate;


  sidebar_list=[];

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private modalService: NgbModal,
    private impApiService :ImpApiService
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


  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        if (result === 'logout') {
          this.confirmLogout();
        }
      }, (reason) => {
        console.log('Dismissed with:', reason);
      }
    );
  }

  confirmLogout() {
    this.impApiService.post(AUTH.logout, {}).subscribe(
      response => {
        console.log('Logged out successfully', response);
        this.finalizeLogout();
      },
      error => {
        console.error('Error during logout', error);
        this.finalizeLogout();
      }
    );
  }

  finalizeLogout() {

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.modalService.dismissAll();
    this.router.navigate(['/auth/login']);
  }
}
