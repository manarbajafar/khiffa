import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-transfer-requests',
  templateUrl: './money-transfer-requests.component.html',
  styleUrls: ['./money-transfer-requests.component.scss']
})
export class MoneyTransferRequestsComponent implements OnInit {
  requests=
  [{ id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get paginatedRequests() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.requests.slice(startIndex, startIndex + this.itemsPerPage);
  }



  changePage(page: number): void {
    this.currentPage = page;
  }

  // viewPreviousInvoices(requestId: string): void {
  //   console.log('عرض الفواتير للطلب ID:', requestId);
  //     this.router.navigate(['../deliveryman-transactions']);
  // }

  openTransferModal(requestId: string): void {
    console.log('فتح نموذج تحويل الأموال للطلب ID:', requestId);

  }

  confirmTransfer(): void {
    console.log('تأكيد تحويل الأموال');
  }

  openRejectModal(requestId: string): void {
    console.log('فتح نموذج رفض الطلب ID:', requestId);

  }

  confirmReject(): void {
    console.log('تأكيد رفض الطلب');
  }
}
