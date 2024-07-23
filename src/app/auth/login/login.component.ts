import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { auth } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private impApiService: ImpApiService) {
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


    if (email !== 'hhhh@gmail.colm' || password !== '12345678') {
      this.errorMessage = 'الإيميل أو كلمة المرور غير صحيحة';
    } else {
      this.errorMessage = null;
      // successful login
      this.impApiService.post(auth.login, this.loginForm.value).subscribe(data => {
        console.log(data);
      })
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
