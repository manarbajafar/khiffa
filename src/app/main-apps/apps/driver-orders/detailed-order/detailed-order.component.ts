import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-detailed-order',
  templateUrl: './detailed-order.component.html',
  styleUrls: ['./detailed-order.component.scss']
})
export class DetailedOrderComponent implements OnInit {
  currentTimestamp: number = new Date().getTime();
  @ViewChild('regionTemplate') regionTemplate;
  selectedRegion: string;
  orderId: number | null = null;
  orderState: number = 0;
  orderDetails: any;

  constructor(private route: ActivatedRoute, private impApiService: ImpApiService , private router: Router, private modalService: NgbModal,  private spinner: NgxSpinnerService) { }
  idParam = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.fetchOrderDetails(this.idParam),
    this.assignOrder(this.idParam);

  }




  fetchOrderDetails(orderId): void {
    this.spinner.show()
    console.log(orderId);
    this.impApiService.get(Order.details + orderId).subscribe(
      response => {
        this.orderDetails =  response.order;
        console.log('Order details fetched:', this.orderDetails);
        this.spinner.hide()
      },
      error => {
        this.spinner.hide()
        console.error('Error fetching order details:', error);
      }
    );
  }

  assignOrder(orderId): void {
   const payload = { order_id: orderId };
    this.impApiService.post(Order.assign+orderId,payload).subscribe(
      response => {
        console.log('Assign order successfully', response);
      },
      error => {
        console.error('Error in assigning order:', error);
      }
    );
}

  // updateOrderState(): void {
  //   if (this.orderState < 3) {
  //     this.orderState++;
  //   }
  // }





  updateOrderState(): void {
    if (this.orderState < 3) {
      this.orderState++;

      this.impApiService.put(`${Order.updateStatus +this.idParam}`,null).subscribe(
        response => {
          console.log('Order status updated successfully:', response);
        },
        error => {
          console.error('Error updating order status:', error);
        }
      );
    }}

    getGoogleMapsUrl(latitude: number, longitude: number): string {
      return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    }
















  openModal(templateRef): void {
    this.modalService.open(templateRef, { size: 'sm' });
  }

  confirmRegionSelection(): void {
    if (this.selectedRegion) {
      this.modalService.dismissAll();
      console.log('Region selected:', this.selectedRegion);

      this.router.navigate(['/apps/driver-orders/orders'], { queryParams: { region: this.selectedRegion } });
    } else {

      console.log('No region selected');
    }

  }


}
