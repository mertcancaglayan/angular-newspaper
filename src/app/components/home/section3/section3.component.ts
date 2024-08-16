import { Component } from '@angular/core';
import { MdHCardComponent } from '../../cards/md-h-card/md-h-card.component';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [MdHCardComponent],
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css', '../home.component.css'],
})
export class Section3Component {}
