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
  ];

  previousTransfers = [
    { id: '#654321', date: '27 يوليو 2024', time: '02:45 م', type: 'استلام', name: 'خالد عمر', amount: 200 },
  ];

  currentPage = 1;
  itemsPerPage = 10;



  handlePageClick(page: number): void {
    this.currentPage = page;
  }

  viewTransferDetails(id: string): void {
  }
}
