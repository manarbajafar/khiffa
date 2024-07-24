import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-order',
  templateUrl: './detailed-order.component.html',
  styleUrls: ['./detailed-order.component.scss']
})
export class DetailedOrderComponent implements OnInit {
  orderId: number | null = null;
  orderState: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const parsedId = Number(idParam);
      if (!isNaN(parsedId)) {
        this.orderId = parsedId;
        // Fetch order details using this.orderId
        this.fetchOrderDetails(this.orderId);
      } else {
        console.error('Order ID is not a valid number');
      }
    } else {
      console.error('Order ID not found in the route');
    }
  }

  get progressWidth(): number {
    return (this.orderState / 3) * 100;
  }

  updateOrderState(): void {
    if (this.orderState < 3) {
      this.orderState++;
    }
  }

  fetchOrderDetails(orderId: number): void {
    // Implement your logic to fetch order details using the orderId
    // This could be an HTTP request to your backend or another data-fetching mechanism
    console.log(`Fetching details for order ID: ${orderId}`);
    // Example:
    // this.orderService.getOrderById(orderId).subscribe(
    //   order => {
    //     this.orderDetails = order;
    //   },
    //   error => {
    //     console.error('Error fetching order details:', error);
    //   }
    // );
  }
}
