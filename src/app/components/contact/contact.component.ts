import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../home/home.component.css'],
})
export class ContactComponent {}
