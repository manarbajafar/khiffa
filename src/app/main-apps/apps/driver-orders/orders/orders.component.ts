import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

declare var bootstrap: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  filteredStatus: string | null = null;
  //pagination
  items_per_page=5;
  current_page=1;
  allRequests: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  paginatedRequests: any[] = [];
  orders = [
    { id: 1, title: 'شركة لذة', price: 20, distance: 15, location: 'العوالي إلى الشرائع'},
    { id: 2, title: 'شركة لذة', price: 30, distance: 10, location: 'العوالي إلى الشرائع'},
    { id: 3, title: 'شركة لذة', price: 25, distance: 20, location: 'العوالي إلى الشرائع'},
    { id: 4, title: 'شركة لذة', price: 10, distance: 5, location: 'العوالي إلى الشرائع'},
    { id: 5, title: 'شركة لذة', price: 35, distance: 30, location: 'العوالي إلى الشرائع'},
    { id: 6, title: 'شركة لذة', price: 25, distance: 25, location: 'العوالي إلى الشرائع'}
  ];
  visibleOrders: number = 6;
  regionSelected: boolean = false;
  filteredOrders = [...this.orders];

  constructor(private router: Router) {}

  ngOnInit(): void {
   // this.showRegionSelectorModal();
  }


  sortOrders(field: string, order: 'asc' | 'desc'): void {
    this.filteredOrders.sort((a, b) => {
      if (a[field as keyof typeof a] < b[field as keyof typeof a]) {
        return order === 'asc' ? -1 : 1;
      } else if (a[field as keyof typeof a] > b[field as keyof typeof a]) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  filterByCompany(company: string): void {
    this.filteredOrders = this.orders.filter(order => order.title.includes(company));
  }



  viewOrderDetail(orderId: number): void {
    this.router.navigate(['apps/driver-orders/detailed-order/',orderId]);
  }

  searchCompany(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchValue = input.value.toLowerCase();
    this.filteredOrders = this.orders.filter(order => order.title.toLowerCase().includes(searchValue));
  }
  viewLocation(location: string): void {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(googleMapsUrl, '_blank');
  }






  changePage(page:number){
    this.current_page=page;
  }

}

