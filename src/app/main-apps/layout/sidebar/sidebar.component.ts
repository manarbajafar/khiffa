import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  // Ensure this import
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // if condition - role,
  sidebar_list = [
    { routerLink: '/apps/admin-dashboard/dashboard-view', label: 'لوحة التحكم', icon: 'bx bxs-dashboard' },
    { routerLink: '/apps/admin-wallet/wallet-view', label: 'المحفظة', icon: 'bx bx-wallet' },
    { routerLink: '/apps/admin-map/map-view', label: 'الخريطة', icon: 'bx bx-map-alt bx-flip-horizontal' },
    { routerLink: '/apps/admin-managing-deliveryman/managing-deliveryman-view', label: 'إدارة المناديب', icon: 'bx bxs-group' },
    { routerLink: '/apps/admin-technical-support/technical-support-view', label: 'تذاكر الدعم الفني', icon: 'bx bx-message-alt-error' },
  ];

  // sidebar_list = [
  //   { routerLink: '/apps/profile', label: 'صفحتي', icon: 'bi bi-person' },
  //   { routerLink: '/apps/wallet', label: 'المحفظة', icon: 'bi bi-wallet' },
  //   { routerLink: '/apps/driver-orders/orders', label: 'الطلبات', icon: 'bi bi-card-checklist' },
  //   { routerLink: '/apps/tickets', label: 'تذاكري', icon: 'bi bi-tools' },
  //   { routerLink: '', label: 'تسجيل خروج', icon: 'bi bi-box-arrow-right' }
  // ];

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private modalService: NgbModal  // Add this
  ) {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidebarService.isExpanded;
  }

  ngOnInit(): void {}

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        if (result === 'logout') {
          this.confirmLogout();
        }
      }, (reason) => {
        console.log('Dismissed with:', reason); // Implement actual logic as needed
      }
    );
  }

  confirmLogout() {
    this.modalService.dismissAll(); // Close all open modals
    this.router.navigate(['/auth/login']); // Navigate to login page
  }
}
