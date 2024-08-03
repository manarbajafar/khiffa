import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import { AUTH, DRIVERPROFILE } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder , private impApiService :ImpApiService ,   private router: Router,
    private spinner: NgxSpinnerService
  ) {

  }


    ngOnInit(): void {
      this.loadProfile();
    }


  ibanValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const ibanRegex = /^SA\d{22}$/;
      const valid = ibanRegex.test(control.value);
      return valid ? null : { invalidIban: true };
    };
  }

  onSubmit(): void {
    console.log(this.form)
    if (this.form.invalid) {
      this.setValidationErrors();
      return;
    }
this.impApiService.put(AUTH.update, this.form.value).subscribe(data=>{

})



    console.log(this.form.value);
  }

  private setValidationErrors(): void {
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        controls[name].markAsTouched();
      }
    }
  }
  navigateToEditProfile(): void {
    this.router.navigate(['apps/edit-profile/']);
  }
  profile = null;

  loadProfile(): void {
    this.spinner.show()
    this.impApiService.get(DRIVERPROFILE.profile).subscribe(
      (response) => {

        this.profile = response.user;
        this.initializeForm();
        console.log(response.user)
        this.spinner.hide()
      },
      (error) => {
        this.spinner.hide()
        console.error('Error fetching profile:', error);
      }
    );
  }

  initializeForm(): void {
    this.form = this.fb.group({
      idNumber: [{ value: this.profile.national_id || '', disabled: true }, Validators.required],
      email: [this.profile.email || '', [Validators.required, Validators.email]],
      phoneNumber: [this.profile.phone_number || '', [Validators.required]],
      ibanNumber: [this.profile.bank_iban || '', [Validators.required]],
    });
  }

}
