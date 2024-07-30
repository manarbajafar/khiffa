import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-support-view',
  templateUrl: './technical-support-view.component.html',
  styleUrls: ['./technical-support-view.component.scss']
})
export class TechnicalSupportViewComponent implements OnInit {

  //filter
  isDropdownOpen = false;
  selectedItem: string | null = null;
  items = ['مفتوحة', 'قيد الانتظار','تحت المعالجة','مغلقة', 'الكل'];
  filteredStatus: string | null = null;


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
    this.filteredStatus = (item === 'الكل') ? null : item;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

  //pagination
  items_per_page=5;
  current_page=1;

  tableData = [
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "قيد الانتظار",
      statusClass: "badge-on-hold",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "قيد الانتظار",
      statusClass: "badge-on-hold",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "قيد الانتظار",
      statusClass: "badge-on-hold",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
  ];

  filteredData=this.tableData;

  constructor() { }

  ngOnInit(): void {
  }


  get paginatedData(){
    const start=(this.current_page-1)*(this.items_per_page);
    const end= start + this.items_per_page;

        // Apply filtering based on filteredStatus
        this.filteredData = this.tableData;
        if (this.filteredStatus) {
          this.filteredData = this.tableData.filter(item => item.status === this.filteredStatus);
        }

        return this.filteredData.slice(start, end);
  }


  changePage(page:number){
    this.current_page=page;
  }

}
