import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp-code',
  templateUrl: './otp-code.component.html',
  styleUrls: ['./otp-code.component.scss']
})
export class OtpCodeComponent implements OnInit {
@ViewChild("ngOtpInput") ngOtpInput: any;
  constructor() { }

  ngOnInit(): void {
  }

  submitOtp(){
    if (this.ngOtpInput.currentVal== null || this.ngOtpInput.currentVal.length !== 6){
      //toaster
      alert('رمز OTP مطلوب');
      return;
    }
    else{
      alert(this.ngOtpInput.currentVal);
      //   navigate to /auth/reset-password
    }
  }
}
