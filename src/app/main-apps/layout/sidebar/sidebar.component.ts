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

  selectedRegion: string;  // Declare selectedRegion to store the chosen region

  sidebar_list = [
    { label: 'صفحتي', icon: 'bi bi-person', routerLink: '/apps/profile' },
    { label: 'المحفظة', icon: 'bi bi-wallet', routerLink: '/apps/wallet' },
    { label: 'الطلبات', icon: 'bi bi-card-checklist', action: 'region' },
    { label: 'تذاكري', icon: 'bi bi-tools', routerLink: '/apps/tickets' },
    { label: 'تسجيل الخروج', icon: 'bi bi-box-arrow-right', action: 'logout' }
  ];

  constructor(public sidebarService: SidebarService, private router: Router, private modalService: NgbModal) {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidebarService.isExpanded;
  }

  ngOnInit(): void {}

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
