import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AUTH } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})




export class CreateAccountComponent {

  signupForm: FormGroup;
  errorMessage: string = '';



  constructor(private fb: FormBuilder, private impApiService: ImpApiService, private router: Router, private spinner: NgxSpinnerService) {

    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^\S+\s+\S+\s+\S+$/)]], // Three-part name
      national_id: ['', [Validators.required, Validators.pattern(/^[12]\d{9}$/)]], // 10-digit number starting with 1 or 2
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]], // Starts with 05 and has 10 digits
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]], // /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ Minimum 8 characters with letters and digits
      password_confirmation:['', Validators.required]
    }, { validator: ConfirmPasswordValidator });
  }



  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }
    const { name, national_id, email, phone_number, password, password_confirmation} = this.signupForm.value;
    this.spinner.show();
    this.impApiService.post(AUTH.register, this.signupForm.value).subscribe(data => {
      console.log(data);
      //toaster to show sucess create account
      // this.router.navigate(['auth/login']);
      this.sendOTP();

    }, error =>{
      this.spinner.hide();
      this.errorMessage=this.errorMessage;

    })

    // this.router.navigate(['auth/attach-file']);


  }



//move to attach file
sendOTP() {
  this.spinner.show();
  const body = { email: this.signupForm.value.email };
  this.impApiService.post(AUTH.sendOtp, body).subscribe(response => {
    this.spinner.hide();
    this.router.navigate(['/auth/otp-code'], { queryParams: { email: this.signupForm.value.email , type_id: '1'} });
  }, error => {
    this.spinner.hide();
    alert('حدث خطأ .'+ error.message);
  });
}

}



// Validator function to check password match
export function ConfirmPasswordValidator(formGroup: FormGroup) {
  const password = formGroup.get('password');
  const passwordConfirmation = formGroup.get('password_confirmation');

  if (passwordConfirmation.errors && !passwordConfirmation.errors['confirmPasswordValidator']) {
    return;
  }

  if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
    passwordConfirmation.setErrors({ confirmPasswordValidator: true });
  } else {
    passwordConfirmation.setErrors(null);
  }
}
