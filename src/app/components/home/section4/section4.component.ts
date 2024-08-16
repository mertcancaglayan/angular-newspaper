import { Component } from '@angular/core';
import { SideCardComponent } from '../../cards/side-card/side-card.component';
import { LgCardComponent } from '../../cards/lg-card/lg-card.component';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [SideCardComponent, LgCardComponent],
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css', '../home.component.css'],
})
export class Section4Component {}
