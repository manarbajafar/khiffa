import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deliveryman-requests',
  templateUrl: './deliveryman-requests.component.html',
  styleUrls: ['./deliveryman-requests.component.scss']
})
export class DeliverymanRequestsComponent implements OnInit {

  allRequests: any[] = [];
  displayRequests: any[] = [];

  constructor(private router: Router) {
    this.allRequests = [
      {id: 1, name: 'سعد محمد', requestType: 'إنشاء حساب', requestDate: new Date() },
      {id: 2, name: 'أحمد سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 3, name: 'فاطمة بدر', requestType: 'إنشاء حساب', requestDate: new Date() },
      {id: 4, name: 'علي حسن', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 5, name: 'مريم محمد', requestType: 'إنشاء حساب', requestDate: new Date() },
      {id: 6, name: 'يوسف علي', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 7, name: 'خالد  سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 8, name: 'خالد  سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },
      {id: 9, name: 'خالد  سعيد', requestType: 'تحديث معلومات', requestDate: new Date() },

    ];

    this.displayRequests = this.allRequests.slice(-6);
  }

  ngOnInit(): void {
  }

  viewRequest(requestId: number): void {
    console.log('عرض التفاصيل للطلب ID:', requestId);
  }

}
