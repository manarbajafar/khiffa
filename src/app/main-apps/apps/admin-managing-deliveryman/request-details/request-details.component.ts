

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  request = {
    name: 'خالد عمر محمد',
    email: 'www@gmail.com',
    idNumber: '1111111111',
    phoneNumber: '0555555555',
    attachments: [
      { url: 'assets/images/test1.png' },
      { url: 'assets/images/test2.png' },
      { url: 'assets/images/test3.png' }
    ],
    modificationRequest: { url: 'assets/images/test2.png' },
    status: 'Suspended',  // Inactive, in progress, Suspended, Active
    checkboxes: {
      name: false,
      idNumber: false,
      license: false,
      profilePicture: false,
      carPicture: false
    }
  };

  showReason = false;
  rejectionForm: FormGroup;
  buttonDisabled = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rejectionForm = this.fb.group({
      rejectionReason: ['', Validators.required]
    });

    this.rejectionForm.valueChanges.subscribe(() => {
      this.checkButtonStatus();
    });

    this.checkButtonStatus();
  }

  showRejectionReason() {
    this.showReason = true;
  }

  checkButtonStatus() {
    const isReasonValid = this.rejectionForm.get('rejectionReason').value.trim().length > 0;
    const isAnyCheckboxChecked = Object.values(this.request.checkboxes).some(checkbox => checkbox);

    this.buttonDisabled = !(isReasonValid && isAnyCheckboxChecked);
  }

  sendRejection() {
    if (!this.buttonDisabled) {
      const rejectionData = {
        rejectionReason: this.rejectionForm.value.rejectionReason,
        checkboxes: this.request.checkboxes
      };
      console.log('Rejection data:', rejectionData);
      // Send to API
    }
  }

  open(index: number): void {
    // open attachments

  }

  get isAnyCheckboxChecked(): boolean {
    return Object.values(this.request.checkboxes).some(checkbox => checkbox);
  }

}
