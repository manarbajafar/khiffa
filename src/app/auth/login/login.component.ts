import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.setValidationErrors();
      return;
    }

    const { email, password } = this.loginForm.value;

    // Replace with actual authentication logic
    if (email !== 'user@gmail.com' || password !== 'password') {
      this.errorMessage = 'الإيميل أو كلمة المرور غير صحيحة';
    } else {
      this.errorMessage = null;
      // Navigate to the next page or perform other actions upon successful login
    }
  }

  private setValidationErrors(): void {
    const controls = this.loginForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        controls[name].markAsTouched();
      }
    }
  }
}
