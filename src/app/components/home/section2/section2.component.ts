import { Component } from '@angular/core';
import { DlCardComponent } from '../../cards/dl-card/dl-card.component';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [DlCardComponent],
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css', '../home.component.css'],
})
export class Section2Component {}
