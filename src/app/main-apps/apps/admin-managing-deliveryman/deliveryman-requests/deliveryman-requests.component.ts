import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ADMIN_MANAGING_DELIVERYMANS } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';


@Component({
  selector: 'app-deliveryman-requests',
  templateUrl: './deliveryman-requests.component.html',
  styleUrls: ['./deliveryman-requests.component.scss']
})
export class DeliverymanRequestsComponent implements OnInit {

  allRequests: any[] = [];
  displayRequests: any[] = [];

  constructor(private router: Router, private impApiService: ImpApiService, private spinner: NgxSpinnerService) {
    this.getUsersRequests();
    this.displayRequests = this.allRequests.slice(-6);
  }

  ngOnInit(): void {
    this.getUsersRequests();
  }

  getUsersRequests(): void {
    this.spinner.show();
    this.impApiService.get(`${ADMIN_MANAGING_DELIVERYMANS.getAccountRequests}?page=${2}&perPage=${2}`).subscribe(data=>{
      this.allRequests=data.data[0].user;
      //this.allRequests = data.data[0].user;
      this.displayRequests = this.allRequests.slice(-6);
      this.spinner.hide();
      console.log('users Requests', this.allRequests)

    },
    error => {
      this.spinner.hide()
      console.error('Error get users:', error);
    });

  }
  viewRequest(requestId: number): void {
    console.log('عرض التفاصيل للطلب ID:', requestId);
  }

}
