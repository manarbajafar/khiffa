import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-ticket-answer',
  templateUrl: './driver-ticket-answer.component.html',
  styleUrls: ['./driver-ticket-answer.component.scss']
})
export class DriverTicketAnswerComponent implements OnInit {

  ticketForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.ticketForm = this.fb.group({
      ticketNumber: [{value: '', disabled: true}],
      issueTitle: [{value: '', disabled: true}],
      issueDescription: [{value: '', disabled: true}],
      adminResponse: [{value: '', disabled: true}]
    });

    // Simulate fetching data from server
    this.loadTicketDetails();
  }

  loadTicketDetails(): void {
    // Simulate fetching data
    this.ticketForm.patchValue({
      ticketNumber: '1234',
      issueTitle: 'مشكلة في النظام',
      issueDescription: 'وصف المشكلة يتضمن التفاصيل الفنية للخطأ المبلغ عنه.',
      adminResponse: 'تم استلام مشكلتك وجاري العمل على حلها.'
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.ticketForm.value);
    // Add your form submission logic here
  }
}
