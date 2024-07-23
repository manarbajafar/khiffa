import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { auth } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private impApiService: ImpApiService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^\S+\s+\S+\s+\S+$/)]], // Three-part name
      national_id: ['', [Validators.required, Validators.pattern(/^[12]\d{9}$/)]], // 10-digit number starting with 1 or 2
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]], // Starts with 05 and has 10 digits
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]], // Minimum 8 characters with letters and digits
      password_confirmation:['', [Validators.required],],
    });
  }

  onSubmit(): void {

    console.log(this.signupForm);
    if (this.signupForm.invalid) {
      //
      return;
    }

    const { name, national_id, email, phone_number, password, password_confirmation} = this.signupForm.value;
    // console.log('Signup successful', { name, national_id, email, phone_number, password, password_confirmation });

    this.impApiService.post(auth.register, this.signupForm.value).subscribe(data => {
      console.log(data);
      //toaster to show sucess create account
      this.router.navigate(['auth/login']);
    }, error =>{
      console.log( 'error form backend ',error.message);
    })
  }

}
