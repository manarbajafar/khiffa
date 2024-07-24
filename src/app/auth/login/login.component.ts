import { Route, Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private impApiService: ImpApiService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

ngOnInit(): void{
  let user = JSON.parse(localStorage.getItem('user'))

  console.log(user)
}



  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.setValidationErrors();
      return;
    }

    const { email, password } = this.loginForm.value;

// coming from backend.
// if (email !== 'aa@gmail.com' || password !== '12345678') {
//   this.errorMessage = 'الإيميل أو كلمة المرور غير صحيحة';
// }

      // successful login
      this.errorMessage = null;

      //check user type id


      this.impApiService.post(auth.login, this.loginForm.value).subscribe(data => {
        console.log(data);

         localStorage.setItem('user',JSON.stringify(data))
         localStorage.setItem('user_token',(data.access_token))
         this.router.navigate(['apps/admin-dashboard/dashboard-view']);
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
