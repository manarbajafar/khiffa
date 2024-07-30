import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'src/app/constant/routes';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  sendEmail() {
    const body = { email: this.email };
    this.http.post(auth.sendOtp, body).subscribe(response => {
      this.router.navigate(['/auth/otp-code'], { queryParams: { email: this.email } });
    }, error => {
      alert('حدث خطأ أثناء إرسال البريد الإلكتروني.');
    });
  }
}
