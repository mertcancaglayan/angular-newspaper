import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css', '../../home/home.component.css'],
})
export class ContactFormComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
    });
  }

  get name() {
    return this.frm.get('name');
  }

  get surname() {
    return this.frm.get('surname');
  }

  get email() {
    return this.frm.get('email');
  }
}
