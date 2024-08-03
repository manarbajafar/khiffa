import { ADMIN_MANAGING_DELIVERYMANS } from 'src/app/constant/routes';
import { ImpApiService } from './../../../../services/imp-api.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-deliveryman-requests',
  templateUrl: './all-deliveryman-requests.component.html',
  styleUrls: ['./all-deliveryman-requests.component.scss']
})
export class AllDeliverymanRequestsComponent implements OnInit {



  allRequests: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  paginatedRequests: any[] = [];

  pagination = {
    current: 1,
    perPage: 5,
  }

  constructor(private impApiService: ImpApiService, private spinner: NgxSpinnerService) {
    this.totalItems = this.allRequests.length;

  }

  ngOnInit(): void {
    // this.getaccountRequests(this.pagination.current, this.pagination.perPage);
    this.getUsersRequests();
  }

  getUsersRequests(): void {
    this.spinner.show();
    this.impApiService.get(`${ADMIN_MANAGING_DELIVERYMANS.getAccountRequests}?page=${2}&perPage=${2}`).subscribe(data=>{
      this.allRequests=data.data[0].user;
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
