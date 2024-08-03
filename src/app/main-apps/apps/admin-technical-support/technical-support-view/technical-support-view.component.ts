import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ADMIN_TECHNICAL_SUPPORT } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-technical-support-view',
  templateUrl: './technical-support-view.component.html',
  styleUrls: ['./technical-support-view.component.scss']
})
export class TechnicalSupportViewComponent implements OnInit {

  ticketsCards = [
    { name: 'قيد الانتظار', tickets_number: 0, icon: 'bx bxs-hourglass-top', key: 'Pending' },
    { name: 'المغلقة', tickets_number: 0, icon: 'bx bx-check', key: 'Closed' },
    { name: 'تحت المعالجة', tickets_number: 0, icon: 'bx bx-loader-circle', key: 'In_Progress' },
    { name: 'المفتوحة', tickets_number: 0, icon: 'bx bx-disc', key: 'Open' },

  ];

  allTicketsNumber=0;

  constructor(private impApiService: ImpApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.countTicketStatuses();
    this.countAllTicket();
    this.showAllTickets();
  }



  countTicketStatuses(): void {
    this.spinner.show();
    this.impApiService.get(ADMIN_TECHNICAL_SUPPORT.countTicketStatuses).subscribe(data => {
      const statusCounts = data.status_counts;
      this.ticketsCards.forEach(card => {
        if (statusCounts.hasOwnProperty(card.key)) {
          card.tickets_number = statusCounts[card.key];
        }
      });
      this.spinner.hide();
    },
    error => {
      this.spinner.hide();
      console.error('Error:', error);
    });
  }

  countAllTicket(): void {
    this.spinner.show();
    this.impApiService.get(ADMIN_TECHNICAL_SUPPORT.countAllTicket).subscribe(data=>{
      this.allTicketsNumber=data;
      this.spinner.hide();
    },
    error => {
      this.spinner.hide()
      console.error('Error:', error);
    });
  }

  showAllTickets(): void {
    this.spinner.show();
    this.impApiService.get(ADMIN_TECHNICAL_SUPPORT.showAllTickets).subscribe(data=>{
      this.tableData=data[0].data; // :)
      this.spinner.hide();
    },
    error => {
      this.spinner.hide()
      console.error('Error:', error);
    });
  }


  filterTickets(): void {
    this.spinner.show();
    this.impApiService.get(ADMIN_TECHNICAL_SUPPORT.filterTickets).subscribe(data=>{
      this.spinner.hide();
    },
    error => {
      this.spinner.hide()
      console.error('Error:', error);
    });
  }

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
