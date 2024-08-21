import { Component, Input } from '@angular/core';
import { MdVCardComponent } from '../../cards/md-v-card/md-v-card.component';
import { SmCardComponent } from '../../cards/sm-card/sm-card.component';
import { SideCardComponent } from '../../cards/side-card/side-card.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [MdVCardComponent, SmCardComponent, SideCardComponent, CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css', '../home.component.css'],
})
export class SectionComponent {
  @Input() sidebarArticles: Article[] = [];
  @Input() editorsPickArticles: Article[] = [];
}
