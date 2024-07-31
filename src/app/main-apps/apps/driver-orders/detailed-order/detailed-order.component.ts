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
  @ViewChild('regionTemplate') regionTemplate;
  selectedRegion: string;
  orderId: number | null = null;
  orderState: number = 0;
  orderDetails: any;

  constructor(private route: ActivatedRoute, private impApiService: ImpApiService , private router: Router, private modalService: NgbModal,  private spinner: NgxSpinnerService) { }
  idParam = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.fetchOrderDetails(this.idParam);
    // this.assignOrder(this.idParam);

  }




  fetchOrderDetails(orderId): void {
    this.spinner.show()
    console.log(orderId); // Log the orderId to ensure it's being passed correctly.
    this.impApiService.get(Order.details + orderId).subscribe(
      response => {
        this.orderDetails =  response.order;
        console.log('Order details fetched:', this.orderDetails);
        this.spinner.hide()


        // this.impApiService.put(Order.updateStatus + orderId, {status: 'newStatus'}).subscribe(
        //   updateResponse => {
        //     console.log('Order status updated:', updateResponse);
        //   },
        //   updateError => {
        //     console.error('Error updating order status:', updateError);
        //   }
        // );
      },
      error => {
        this.spinner.hide()
        console.error('Error fetching order details:', error);
      }
    );
  }

// orderDetails=null;
//   fetchOrderDetails(orderId): void {
//     console.log(orderId)
//     this.impApiService.get(Order.details + orderId).subscribe(d => {
//       data => {

//         this.orderDetails = data.data

//       },
//     //هنا اي بي اي ثاني لحالات الطلب
//     //this.impApiService.put((Order.updateStatus + orderId),'').subscribe
//   //  console.log(orderId)
//     })

//   }



// assignOrder (orderId) : void {
//   this.impApiService.put(Order.assign, orderId).subscribe(data=>{
//     console.log(orderId)
//   })
// }


  updateOrderState(): void {
    if (this.orderState < 3) {
      this.orderState++;
    }
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
