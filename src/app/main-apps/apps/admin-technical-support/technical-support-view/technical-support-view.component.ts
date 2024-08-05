import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
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

  tableData: any[] = [];
  filteredData: any[] = [];
  items_per_page = 5;
  current_page = 1;
  isDropdownOpen = false;
  selectedItem: string | null = null;
  items = ['مفتوحة', 'قيد الانتظار', 'تحت المعالجة', 'مغلقة', 'الكل'];
  filteredStatus: string | null = null;

  constructor(private impApiService: ImpApiService, private spinner: NgxSpinnerService, private router: Router) { }

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
    this.impApiService.get(ADMIN_TECHNICAL_SUPPORT.showAllTickets).subscribe(data => {
      this.tableData = data[0].data.map(ticket => {
        const statusInfo = ticket.ticket_statuses[0];
        const ticketCard = this.ticketsCards.find(card => card.key === statusInfo.status_type.status);
        return {
          title: ticket.title,
          user_id: ticket.user_id,
          id: ticket.id,
          date: moment(ticket.created_at).format('D MMMM YYYY'),
          time: moment(ticket.created_at).format('h:mm A'),
          status: ticketCard ? ticketCard.name : statusInfo.status_type.status,
          statusClass: ticketCard ? this.getStatusClass(ticketCard.key) : 'badge-default'
        };
      });
      this.filteredData = [...this.tableData]; // Initial filtering
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      console.error('Error:', error);
    });
  }

  getStatusClass(statusKey: string): string {
    switch (statusKey) {
      case 'Pending':
        return 'badge-on-hold';
      case 'Closed':
        return 'badge-closed';
      case 'In_Progress':
        return 'badge-under-processing';
      case 'Open':
        return 'badge-open';
      default:
        return 'badge-default';
    }
  }


  viewTicketDetails(id: number): void {
    console.log(id)
    this.router.navigate(['apps/admin-technical-support/ticket-info/', id]);
  }




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
