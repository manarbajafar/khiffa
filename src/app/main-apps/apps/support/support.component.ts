import { Component, OnInit } from '@angular/core';
import { DRIVERPROFILE } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  ticketTitle: string = '';
  ticketDescription: string = '';

  constructor(private impApiService :ImpApiService ) { }

  ngOnInit(): void {
    this.sendDriverticket();
  }

   sendDriverticket(): void {
    const formData = {
      title: this.ticketTitle,
      description: this.ticketDescription
    };

    this.impApiService.post(DRIVERPROFILE.tickets, formData).subscribe(
      response => {
        console.log('Ticket submitted successfully', response);
      },
      error => {
        console.error('Error submitting ticket:', error);
      }
    );
  }
}
