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
  confirmPassword: string = '';
  submitted: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email')!;
    this.otp = this.route.snapshot.queryParamMap.get('otp')!;
  }

  resetPassword() {
    this.spinner.show();

    if (this.password !== this.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    const body = { email: this.email, password: this.password, otp: this.otp };
    this.http.post(AUTH.resetPassword, body).subscribe(response => {
      this.submitted = true;
      this.spinner.hide();
    }, error => {
      //toaser
      alert('حدث خطأ أثناء إعادة تعيين كلمة المرور.'+ error.message);
    });
  }

}
