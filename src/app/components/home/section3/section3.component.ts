import { Component, Input } from '@angular/core';
import { MdHCardComponent } from '../../cards/md-h-card/md-h-card.component';
import { Article } from '../../../models/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [MdHCardComponent, CommonModule],
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css', '../home.component.css'],
})
export class Section3Component {
  @Input() technologyArticles: Article[] = [];
  @Input() businessArticles: Article[] = [];
  @Input() error: boolean = false;
}
