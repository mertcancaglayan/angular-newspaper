import { Component, Input } from '@angular/core';
import { SideCardComponent } from '../../cards/side-card/side-card.component';
import { LgCardComponent } from '../../cards/lg-card/lg-card.component';
import { HomeComponent } from '../home.component';
import { Article } from '../../../models/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [SideCardComponent, LgCardComponent, CommonModule],
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css', '../home.component.css'],
})
export class Section4Component {
  @Input() popularArticles: Article[] = [];
  @Input() recentArticles: Article[] = [];
  @Input() error: boolean = false;
}
