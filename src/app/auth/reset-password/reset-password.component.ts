import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AUTH } from 'src/app/constant/routes';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent  {

  email: string = '';
  otp: string = '';
  password: string = '';
  password_confirmation: string = '';
  submitted: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email')!;
    this.otp = this.route.snapshot.queryParamMap.get('otp')!;
  }

  resetPassword() {
    this.spinner.show();

    if (this.password !== this.password_confirmation) {
      alert('كلمات المرور غير متطابقة');
      this.spinner.hide();
      return;
    }
    const body = { email: this.email, password: this.password, password_confirmation: this.password_confirmation, otp: this.otp };
    this.http.post(AUTH.resetPassword, body).subscribe(response => {
      this.submitted = true;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      //toaser
      alert('حدث خطأ أثناء إعادة تعيين كلمة المرور.'+ error.message);
    });
  }

}
