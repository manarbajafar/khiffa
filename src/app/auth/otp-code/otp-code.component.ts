import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AUTH } from 'src/app/constant/routes';

@Component({
  selector: 'app-otp-code',
  templateUrl: './otp-code.component.html',
  styleUrls: ['./otp-code.component.scss']
})
export class OtpCodeComponent implements OnInit {
  @ViewChild("ngOtpInput") ngOtpInput: any;

  // otp: string = '';
  email: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email')!;
  }



  submitOtp() {

    if (this.ngOtpInput.currentVal== null || this.ngOtpInput.currentVal.length !== 6){
      //toaster
      alert('رمز OTP مطلوب');
      return;
    }
    else{
      this.spinner.show();
      const form = {email: this.email , otp:this.ngOtpInput.currentVal}
      this.http.post(AUTH.checkOtp, form).subscribe(response => {
        this.spinner.hide();
        console.log('form.otp' + form.otp)
      this.router.navigate(['/auth/reset-password'], { queryParams: { email: form.email, otp: form.otp } });
    }, error => {
      //toaster
      alert('رمز OTP غير صحيح.'+ error.message);
    });
    }



  }

  resendOtp() {
    const body = { email: this.email };
    this.http.post(AUTH.sendOtp, body).subscribe(response => {
      alert('تم إرسال رمز OTP جديد.');
    }, error => {
      alert('حدث خطأ أثناء إعادة إرسال رمز OTP.');
    });
  }
}
