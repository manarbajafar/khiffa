import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ADMIN_TECHNICAL_SUPPORT } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {
  title = 'العنوان';
  subtitle = 'مشكلة بخصوص تحويل المستحقات';
  date = new Date();
  time = new Date();
  description = 'XXXXXXXxxxxxxxxxxxxxxxxxxxXXxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXX';
  ticketNumber = '123456';
  name = 'سعد محمد';
  status = 'مفتوحة';
  statusOptions = ['تحت الإجراء', 'مغلقة'];
  selectedStatus = this.status;
  comment = '';

  constructor(private impApiService: ImpApiService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      this.spinner.show();
      this.impApiService.post(ADMIN_TECHNICAL_SUPPORT.changeTicketStatus, form.value).subscribe(response => {
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
