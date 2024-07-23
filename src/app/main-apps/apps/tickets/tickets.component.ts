import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  items_per_page: number = 10;
  current_page: number = 1;
  filteredData: any[] = [
    { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1234', status: 'فتح', statusClass: 'badge-open' },
    { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1235', status: 'مفتوحة', statusClass: 'badge-on-hold' },
    { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1236', status: 'مغلقة', statusClass: 'badge-closed' },
    { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1237', status: 'تحت المعالجة', statusClass: 'badge-under-processing' },
    { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1238', status: 'مفتوحة', statusClass: 'badge-on-hold' },
    { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1239', status: 'فتح', statusClass: 'badge-open' }
  ];
  paginatedData: any[];

  constructor() {
    this.paginatedData = this.getPaginatedData();
  }

  ngOnInit(): void {}

  changePage(page: number): void {
    this.current_page = page;
    this.paginatedData = this.getPaginatedData();
  }

  getPaginatedData(): any[] {
    const start = (this.current_page - 1) * this.items_per_page;
    const end = start + this.items_per_page;
    return this.filteredData.slice(start, end);
  }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.filteredData.length / this.items_per_page);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
