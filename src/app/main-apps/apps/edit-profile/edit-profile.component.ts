import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;



  uploadForm: FormGroup;
  fields = [
    { name: 'license', label: 'إرفاق صورة رخصة القيادة', id: 'license' },
    { name: 'car', label: 'إرفاق صورة للسيارة', id: 'car' },
    { name: 'personal', label: 'إرفاق صورة شخصية', id: 'personal' }
  ];
  fileNames: { [key: string]: string } = {};

  @ViewChild('regionModal') regionModal;

  constructor(private fb: FormBuilder, private modalService: NgbModal, private spinner: NgxSpinnerService) {
    this.uploadForm = this.fb.group({
      license: [null, Validators.required],
      car: [null, Validators.required],
      personal: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.promptRegionSelection();
  }

  onFileDrop(event: DragEvent, field: string) {
    event.preventDefault();
    this.processFile(event.dataTransfer?.files[0], field);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onFileSelect(event: any, field: string) {
    this.processFile(event.target.files[0], field);
  }

  processFile(file: File, field: string) {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      this.uploadForm.get(field)?.setValue(file);
      this.uploadForm.get(field)?.setErrors(null);
      this.fileNames[field] = file.name;
    } else {
      this.uploadForm.get(field)?.setErrors({ invalidFile: true });
      this.fileNames[field] = '';
      alert('الملف غير صالح. يرجى تحميل ملف بصيغة JPEG, PNG, أو PDF وألا يتجاوز حجمه 5MB.');
    }
  }

  triggerFileInput(fieldId: string) {
    const fileInput = document.getElementById(fieldId) as HTMLInputElement;
    fileInput.click();
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      console.log("Form Submitted!", this.uploadForm.value);
      alert('تم بنجاح.');
    } else {
      this.uploadForm.markAllAsTouched();
      alert('يرجى إرفاق جميع الملفات المطلوبة.');
    }
  }

  promptRegionSelection(): void {
    const modalRef = this.modalService.open(this.regionModal);
    modalRef.result.then(
      (result) => {
        console.log("Region selected:", result);
      },
      (error) => {
        console.log('Region selection dismissed due to error:', error);
      }
    );
  }
}
