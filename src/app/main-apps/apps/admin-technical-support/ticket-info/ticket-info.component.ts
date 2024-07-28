import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
