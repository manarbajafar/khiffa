import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder , private impApiService :ImpApiService ,   private router: Router) {
    // this.form = this.fb.group({
    //   idNumber: [{ value: '11448993155', disabled: true }, Validators.required],
    //   email: ['Mohammed1989@gmail.com', [Validators.required, Validators.email]],
    //   phoneNumber: ['+966565658441', [Validators.required, Validators.pattern(/^05\d{8}$/)]],
    //   ibanNumber: ['', [Validators.required, this.ibanValidator()]],
    //   personalImage: ['83_20240712191938_صورة.png', Validators.required],
    //   carImage: ['83_20240712191938_صورة.png', Validators.required],
    //   licenseImage: ['83_20240712191938_صورة.png', Validators.required]
    // });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      idNumber: [{ value: '11448993155', disabled: true }, Validators.required],
      email: ['Mohammed1989@gmail.com', [Validators.required, Validators.email]],
      phoneNumber: ['+966565658441', [Validators.required]],
      ibanNumber: ['', [Validators.required]],
      personalImage: ['83_20240712191938_صورة.png', Validators.required],
      carImage: ['83_20240712191938_صورة.png', Validators.required],
      licenseImage: ['83_20240712191938_صورة.png', Validators.required]
    });
  }

  ibanValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const ibanRegex = /^SA\d{22}$/;
      const valid = ibanRegex.test(control.value);
      return valid ? null : { invalidIban: true };
    };
  }

  onSubmit(): void {
    console.log(this.form)
    if (this.form.invalid) {
      this.setValidationErrors();
      return;
    }
this.impApiService.put(AUTH.update, this.form.value).subscribe(data=>{

})


    // Handle form submission
    console.log(this.form.value);
  }

  private setValidationErrors(): void {
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        controls[name].markAsTouched();
      }
    }
  }
  navigateToEditProfile(): void {
    this.router.navigate(['apps/edit-profile/']);
  }


}
