import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AUTH } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent {

  signupForm: FormGroup;
  errorMessage: string | null = null;
  fileNames: { [key: string]: string } = {};

  fields = [
    { id: 'inputProfilePicture', label: 'صورة الملف الشخصي', name: 'profile_picture' },
    { id: 'inputLicense', label: 'صورة الرخصة', name: 'license' },
    { id: 'inputCar', label: 'صورة السيارة', name: 'car_picture' }
  ];

  constructor(
    private fb: FormBuilder,
    private impApiService: ImpApiService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF\s]+$/)]],
      national_id: ['', [Validators.required, Validators.pattern(/^[1-2]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      password_confirmation: ['', [Validators.required]],
      profile_picture: [null, Validators.required],
      license: [null, Validators.required],
      car_picture: [null, Validators.required]
    }, { validator: this.confirmPasswordValidator('password', 'password_confirmation') });
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  confirmPasswordValidator(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[confirmPasswordKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ confirmPasswordValidator: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  triggerFileInput(fieldId: string) {
    const fileInput = document.getElementById(fieldId) as HTMLInputElement;
    fileInput.click();
  }

  onFileDrop(event: DragEvent, fieldName: string) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0], fieldName);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onFileSelect(event: Event, fieldName: string) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      this.handleFile(files[0], fieldName);
    }
  }

  handleFile(file: File, fieldName: string) {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (allowedTypes.includes(file.type) && file.size <= maxSize) {
      this.signupForm.get(fieldName)?.setValue(file);
      this.fileNames[fieldName] = file.name;
      this.signupForm.get(fieldName)?.updateValueAndValidity();
    } else {
      this.signupForm.get(fieldName)?.setErrors({ invalidFile: true });

      if (file.size > maxSize) {
        alert('حجم الملف يجب أن يكون أقل من 5 ميجابايت.');
      } else if (!allowedTypes.includes(file.type)) {
        alert('الملف غير صالح. يرجى تحميل ملف بصيغة JPEG, PNG, أو PDF.');
      }
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = new FormData();
      Object.keys(this.signupForm.controls).forEach(key => {
        const value = this.signupForm.get(key)?.value;
        if (key === 'profile_picture' || key === 'license' || key === 'car_picture') {
          if (value instanceof File) {
            formData.append(key, value);
          }
        } else {
          formData.append(key, value || '');
        }
      });

      this.spinner.show();
      this.impApiService.post(AUTH.register, formData).subscribe(data => {
        console.log(data);
        this.sendOTP();
      }, error => {
        this.spinner.hide();
        this.errorMessage = error.error.message;
        console.error('Error:', error);
      });
    } else {
      this.signupForm.markAllAsTouched();
      this.errorMessage = 'يرجى تصحيح الأخطاء في النموذج.';
    }
  }

  sendOTP() {
    this.spinner.show();
    const body = { email: this.signupForm.value.email };
    this.impApiService.post(AUTH.sendOtp, body).subscribe(response => {
      this.spinner.hide();
      this.router.navigate(['/auth/otp-code'], { queryParams: { email: this.signupForm.value.email, type_id: '1' } });
    }, error => {
      this.spinner.hide();
      alert('حدث خطأ أثناء إرسال OTP: ' + error.message);
    });
  }
}
