import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AUTH } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private impApiService: ImpApiService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void { }

  sendEmail() {
    this.spinner.show();
    const body = { email: this.email };
    this.impApiService.post(AUTH.sendOtp, body).subscribe(response => {
      this.spinner.hide();
      this.router.navigate(['/auth/otp-code'], { queryParams: { email: this.email , type_id: '2' } });
    }, error => {
      this.spinner.hide();
      alert('حدث خطأ أثناء إرسال البريد الإلكتروني.'+ error.message);
    });
  }
}
