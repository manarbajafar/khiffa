import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private route: ActivatedRoute, private impApiService: ImpApiService , private router: Router, private modalService: NgbModal) { }
  idParam = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.fetchOrderDetails(this.idParam);


  }

  fetchOrderDetails(orderId): void {
    //console.log(orderId)
    this.impApiService.get(Order.details + orderId).subscribe(d => {
    //هنا اي بي اي ثاني لحالات الطلب
    this.impApiService.put((Order.updateStatus + orderId),'').subscribe
    console.log(orderId)
    })

  }



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
      this.modalService.dismissAll();  // Close the modal
      console.log('Region selected:', this.selectedRegion);
      // Navigate to the orders page with the selected region as a query parameter
      this.router.navigate(['/apps/driver-orders/orders'], { queryParams: { region: this.selectedRegion } });
    } else {
      // Optionally handle the case where no region has been selected
      console.log('No region selected');
    }

  }


}
