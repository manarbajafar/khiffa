import { ADMIN_MANAGING_DELIVERYMANS } from 'src/app/constant/routes';
import { ImpApiService } from './../../../../services/imp-api.service';
import { Component, OnInit } from '@angular/core';

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

  pagination ={
      current:1,
      perPage:10,
      length:5
  }

  constructor(private impApiService: ImpApiService) {
    this.allRequests = [
      {id: 1, name: 'سعد محمد', requestType: 'إنشاء حساب', requestDate: new Date() },
      {id: 2, name: 'أحمد سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 3, name: 'فاطمة الزهراء', requestType: 'إنشاء حساب', requestDate: new Date() },
      {id: 4, name: 'علي حسن', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 5, name: 'مريم محمد', requestType: 'إنشاء حساب', requestDate: new Date() },
      {id: 6, name: 'يوسف علي', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 7, name: 'خالد سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 8, name: 'خالد سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 9, name: 'عبدالرحمن احمد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 10, name: 'محمود كرم', requestType: 'تحديث معلومات', requestDate: new Date() },
    ];



    this.totalItems = this.allRequests.length;
    this.updatePaginatedRequests();
  }

  ngOnInit(): void {

    this.getusers(this.pagination.current, this.pagination.length);
  }

  getusers(current, length){
    this.impApiService.get(ADMIN_MANAGING_DELIVERYMANS.getDeliverymanList+`page=${current}&perPage=${length}`).subscribe(data =>{
      this.pagination ={
        current:data.meta.current_page,
        perPage:data.meta.per_page,
        length:data.meta.last_page

    }

    })

  }

  updatePaginatedRequests(): void {
    const startIndex = (this.pagination.current - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.pagination.perPage;
    this.paginatedRequests = this.allRequests.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.pagination.current = page;
    this.updatePaginatedRequests();
  }

  viewRequest(requestId: number): void {
    console.log('عرض التفاصيل للطلب ID:', requestId);
  }

}
