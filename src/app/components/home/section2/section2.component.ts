import { Component, Input } from '@angular/core';
import { DlCardComponent } from '../../cards/dl-card/dl-card.component';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [DlCardComponent],
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css', '../home.component.css'],
})
export class Section2Component {
  @Input() editorsPickArticle: Article[] = [];
}
