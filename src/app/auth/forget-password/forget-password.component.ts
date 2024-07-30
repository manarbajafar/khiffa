import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { auth } from 'src/app/constant/routes';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private http: HttpClient, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void { }

  sendEmail() {

    this.spinner.show();
    this.http.post(auth.sendOtp, this.email).subscribe(response => {
      this.spinner.hide();
      this.router.navigate(['/auth/otp-code'], { queryParams: { email: this.email } });
    }, error => {
      //toaster
      alert('حدث خطأ أثناء إرسال البريد الإلكتروني.');
    });
  }
}
