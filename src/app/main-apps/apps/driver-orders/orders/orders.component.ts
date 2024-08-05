import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH, Order } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  filteredStatus: string | null = null;
  @ViewChild('regionModal') regionModal;
  selectedRegion = null;




 AllOrder = [
    // { id: 1, title: 'شركة لذة', price: 20, distance: 15, location: 'العوالي إلى الشرائع' },
    // { id: 2, title: 'شركة لذة', price: 30, distance: 10, location: 'العوالي إلى الشرائع' },
    // { id: 3, title: 'شركة لذة', price: 25, distance: 20, location: 'العوالي إلى الشرائع' },
    // { id: 4, title: 'شركة لذة', price: 10, distance: 5, location: 'العوالي إلى الشرائع' },
    // { id: 5, title: 'شركة لذة', price: 35, distance: 30, location: 'العوالي إلى الشرائع' },
    // { id: 6, title: 'شركة لذة', price: 25, distance: 25, location: 'العوالي إلى الشرائع' }
  ];



 filteredOrders = [];

  constructor(private router: Router, private impApiService: ImpApiService, private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) { }


  ngOnInit(): void {


    setTimeout(() => {
      this.promptRegionSelection();
    }, 500);

  }


  promptRegionSelection(): void {
    const modalRef = this.modalService.open(this.regionModal);
    // modalRef.result.then(
    //   (result) => {
    //     if (this.selectedRegion) {
    //       console.log(this.selectedRegion)
    //       // this.updateCityAndLoadOrders(this.selectedRegion);
    //     } else {
    //       console.log("No region selected or selection dismissed.");
    //     }
    //   },
    //   (error) => {
    //     console.log('Region selection dismissed due to error:', error);
    //   }
    // );
  }

  selectCity(city) {
    this.selectedRegion = city;
    console.log("Updating city to:", this.selectedRegion);
  }

  updateCityAndLoadOrders(): void {

    this.impApiService.put(AUTH.regeion, { city: this.selectedRegion }).subscribe(
      response => {
        console.log('City updated successfully:', response);
        this.loadOrders();  // Load orders after city update
      },
      error => {
        console.error('Error updating city:', error);
      }
    );
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
    this.filteredOrders = this.AllOrder.filter(order => order.title.includes(company));
  }



  viewOrderDetail(orderId: number): void {
    console.log(orderId)
    this.router.navigate(['apps/driver-orders/detailed-order/', orderId]);
  }

  searchCompany(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchValue = input.value.toLowerCase();
    this.filteredOrders = this.AllOrder.filter(order => order.title.toLowerCase().includes(searchValue));
  }




  Orders= null
  loadOrders(): void {
    this.spinner.show()
    this.impApiService.get(`${Order.getorder}?page=${1}&perPage=${8}` ).subscribe(
      data => {

        // this.AllOrder = data.data
        this.Orders = data;
        this.modalService.dismissAll();
        this.spinner.hide()

      },
      error => {
        this.spinner.hide()
        console.error('Error fetching orders:', error);
      }
    );
  }
  viewLocation(latitude: number, longitude: number): void {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  }



}
