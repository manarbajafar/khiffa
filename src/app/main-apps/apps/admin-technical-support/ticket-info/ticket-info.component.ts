import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ADMIN_TECHNICAL_SUPPORT } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {

  status = 'مفتوحة';
  statusOptions = ['تحت الإجراء', 'مغلقة'];
  selectedStatus = this.status;
  comment = '';

  ticketDetails;

  id = this.route.snapshot.paramMap.get('id');

  constructor(private impApiService: ImpApiService, private spinner: NgxSpinnerService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.showTicketDetails(this.id);
  }

  showTicketDetails(id): void {
    this.spinner.show();
    this.impApiService.get(ADMIN_TECHNICAL_SUPPORT.showTicket + id).subscribe(data => {
      this.ticketDetails=data[0];
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      console.error('Error:', error);
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      this.spinner.show();
      this.impApiService.post(ADMIN_TECHNICAL_SUPPORT.changeTicketStatus, form.value).subscribe(data => {

        this.spinner.hide();
        this.router.navigate(['/technical-support-view']);

      }, error => {
        this.spinner.hide();
        alert('حدث خطأ أثناء إرسال البريد الإلكتروني.'+ error.message);
      });

    } else {
      console.log('Form is not valid');
    }
  }
}
