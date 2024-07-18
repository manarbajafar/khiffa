import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^\S+\s+\S+\s+\S+$/)]], // Three-part name
      id: ['', [Validators.required, Validators.pattern(/^[12]\d{9}$/)]], // 10-digit number starting with 1 or 2
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]], // Starts with 05 and has 10 digits
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]] // Minimum 6 characters with letters and digits
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      // Handle form errors
      return;
    }

    // Handle form submission
    const { name, id, email, phone, password } = this.signupForm.value;

    // Replace with actual signup logic
    console.log('Signup successful', { name, id, email, phone, password });
  }

}
