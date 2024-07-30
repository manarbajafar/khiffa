import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,
    private impApiService: ImpApiService,
    private router: Router,
    private spinner: NgxSpinnerService)
    {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  ngOnInit():void{

  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.setValidationErrors();
      return;
    }

    const { email, password } = this.loginForm.value;
      // successful login
      this.errorMessage = null;

      this.spinner.show();
      this.impApiService.post(auth.login, this.loginForm.value).subscribe(data => {

        console.log(data.access_token);

        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', data.access_token);

        this.spinner.hide();

        if(data.user.user_type_id == 1){
          this.router.navigate(["apps/admin-dashboard/dashboard-view"]);
        }
        if(data.user.user_type_id == 2){
          this.router.navigate(["apps/driver-orders/orders"]);
        }



      }, error => {
        this.errorMessage =error.message;
      })
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
