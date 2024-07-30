import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss']
})
export class WalletViewComponent implements OnInit {
  balance: number = 100;
  transactions = [
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'اضافة', name: 'شركة لذة', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'اضافة', name: 'شركة لذة', amount: 20 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'سحب', name: 'سعيد صالح', amount: 60 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'اضافة', name: 'محمد سالم', amount: 50 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'سحب', name: 'شركة سهل', amount: 70 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'اضافة', name: 'شركة غدف', amount: 50 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'سحب', name: 'خالد عمر', amount: 25 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'سحب', name: 'خالد عمر', amount: 25 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'سحب', name: 'شركة سهل', amount: 25 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', type: 'سحب', name: 'خالد عمر', amount: 25 }
  ];

  requests=[{ id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
  ];


  current_page: number = 1;
  items_per_page: number = 7;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.updateTransactions();
  }

  openModal(template: any): void {
    this.modalService.open(template, { size: 'xl' });
  }

  openModal2(template: any): void {
    this.modalService.open(template, { size: 's' });
  }

  handlePageClick(page: number): void {
    this.current_page = page;
    this.updateTransactions();
  }

  updateTransactions(): void {
    const startIndex = (this.current_page - 1) * this.items_per_page;
    const endIndex = startIndex + this.items_per_page;
    this.transactions = this.transactions.slice(startIndex, endIndex);
  }

  viewPreviousInvoices(requestId: string): void {
  }

  approveRequest(requestId: string): void {
  }

  rejectRequest(requestId: string): void {
  }

}
