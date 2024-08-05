import { Component, OnInit } from '@angular/core';
import { DRIVERPROFILE } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  // filteredData: any[] = [
  //   { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1234', status: 'فتح', statusClass: 'badge-open' },
  //   { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1235', status: 'مفتوحة', statusClass: 'badge-on-hold' },
  //   { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1236', status: 'مغلقة', statusClass: 'badge-closed' },
  //   { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1237', status: 'تحت المعالجة', statusClass: 'badge-under-processing' },
  //   { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1238', status: 'مفتوحة', statusClass: 'badge-on-hold' },
  //   { title: 'مشكلة بنحويل المستحقات', name: 'سعد محمد', date: '5 يناير 2024', time: '3:00 م', id: '1239', status: 'فتح', statusClass: 'badge-open' }
  // ];


  constructor( private impApiService :ImpApiService ) {

  }

  ngOnInit(): void {
 this.loadDriverTicket();
  }



  tickets  = null;

  loadDriverTicket(): void {
    this.impApiService.get(DRIVERPROFILE.tickets).subscribe(
      (response) => {

        this.tickets = response[0];
        console.log('this.tickets', this.tickets)
     if (response && response.data) {  //to check the null

      console.log("Tickets loaded:", this.tickets);
        } else {
          console.warn("Unexpected API response structure:", response);
          this.tickets = [];
        }
      },
      (error) => {
        console.error("Error fetching driver tickets:", error);
        this.tickets = [];
      }
    );
  }
}
