import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveryman-transactions',
  templateUrl: './deliveryman-transactions.component.html',
  styleUrls: ['./deliveryman-transactions.component.scss']
})
export class DeliverymanTransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  latestTransactions = [
    { id: '#123456', date: '28 يوليو 2024', time: '10:30 ص', type: 'تحويل', name: 'سعيد احمد', amount: 150 },
    // بيانات إضافية هنا
  ];

  previousTransfers = [
    { id: '#654321', date: '27 يوليو 2024', time: '02:45 م', type: 'استلام', name: 'خالد عمر', amount: 200 },
    // بيانات إضافية هنا
  ];

  currentPage = 1;
  itemsPerPage = 10;



  handlePageClick(page: number): void {
    this.currentPage = page;
    // إضافة منطق لتحميل البيانات الجديدة بناءً على الصفحة الحالية
  }

  viewTransferDetails(id: string): void {
    // منطق عرض تفاصيل التحويل
  }
}
