// driver-activate.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-activate',
  templateUrl: './driver-activate.component.html',
  styleUrls: ['./driver-activate.component.scss']
})
export class DriverActivateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value); // Handle the form submission here
    }
  }
}
