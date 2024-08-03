

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

  showRejectionDiv = false;
  rejectionForm: FormGroup;
  buttonDisabled = true;
  userId = this.route.snapshot.paramMap.get('id');
  requestStatus: string;


  constructor(
    private fb: FormBuilder,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {

    this.showInfoAccountReq(this.userId);

    this.rejectionForm = this.fb.group({
      rejectionReason: ['', Validators.required]
    });

    this.rejectionForm.valueChanges.subscribe(() => {
      this.checkButtonStatus();
    });

    this.checkButtonStatus();

    this.route.queryParams.subscribe(queryParams => {
      this.requestStatus = queryParams['status'];
    });
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
    this.showRejectionDiv = !this.showRejectionDiv;
  }

  checkButtonStatus() {
    // Check if rejection reason is valid and at least one checkbox is checked
    const isReasonValid = this.rejectionForm.get('rejectionReason').value.trim().length > 0;
    const isAnyCheckboxChecked = Object.values(this.request_details.checkboxes).some(checkbox => checkbox);

    // Enable/disable the button based on the conditions
    this.buttonDisabled = !(isReasonValid && isAnyCheckboxChecked);
  }

  sendRejection() {
    if (!this.buttonDisabled) {
      const rejectionData = {
        rejectionReason: this.rejectionForm.value.rejectionReason,
        checkboxes: {
          name: this.request_details.checkboxes.name ? 1 : 0,
          idNumber: this.request_details.checkboxes.idNumber ? 1 : 0,
          license: this.request_details.checkboxes.license ? 1 : 0,
          profilePicture: this.request_details.checkboxes.profilePicture ? 1 : 0,
          carPicture: this.request_details.checkboxes.carPicture ? 1 : 0
        }
      };
      console.log('Rejection data:', rejectionData);
      // Send rejectionData to API
    }
  }

  open(index: number): void {
    // open attachments

  }

 // Method to update button status based on checkbox changes
  updateCheckbox(checkbox: string) {
    this.checkButtonStatus();
  }

  get isAnyCheckboxChecked(): boolean {
    // Return true if any checkbox is checked
    return Object.values(this.request_details.checkboxes).some(checkbox => checkbox);
  }

}
