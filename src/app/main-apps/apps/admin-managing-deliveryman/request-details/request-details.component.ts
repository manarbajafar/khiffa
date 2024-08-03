

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ADMIN_MANAGING_DELIVERYMANS } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  request_details = {
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
  userId = this.route.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {

    this.showInfoAccountReq(this.userId);

    this.showRejectionReason();

    this.rejectionForm = this.fb.group({
      rejectionReason: ['', Validators.required]
    });

    this.rejectionForm.valueChanges.subscribe(() => {
      this.checkButtonStatus();
    });

    this.checkButtonStatus();
  }

  showInfoAccountReq(userId): void{
    this.spinner.show();
    this.impApiService.get(ADMIN_MANAGING_DELIVERYMANS.showInfoAccountReq + userId).subscribe(data => {
      this.request_details=data[0];
      this.spinner.hide();
      console.log('this.users', this.request_details)
    },
    error => {
      this.spinner.hide()
      console.error('Error get users:', error);
    });
  }



  showRejectionReason() {
    this.showReason = true;
  }

  checkButtonStatus() {
    const isReasonValid = this.rejectionForm.get('rejectionReason').value.trim().length > 0;
    const isAnyCheckboxChecked = Object.values(this.request_details.checkboxes).some(checkbox => checkbox);

    this.buttonDisabled = !(isReasonValid && isAnyCheckboxChecked);
  }

  sendRejection() {
    if (!this.buttonDisabled) {
      const rejectionData = {
        rejectionReason: this.rejectionForm.value.rejectionReason,
        checkboxes: this.request_details.checkboxes
      };
      console.log('Rejection data:', rejectionData);
      // Send to API
    }
  }

  open(index: number): void {
    // open attachments

  }

  get isAnyCheckboxChecked(): boolean {
    return Object.values(this.request_details.checkboxes).some(checkbox => checkbox);
  }

}
