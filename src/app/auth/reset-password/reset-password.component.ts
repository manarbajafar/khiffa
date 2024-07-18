import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent  {

  submitted = false;

  handleSubmit() {
    // Handle form submission logic here, e.g., reset password API call

    // After successful submission, set submitted to true to trigger template change
    this.submitted = true;
  }

  resetForm() {
    // Reset form logic if needed
    this.submitted = false;
  }

}
