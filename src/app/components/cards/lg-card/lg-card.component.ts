import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-lg-card',
  standalone: true,
  imports: [PostMetaComponent, CommonModule],
  templateUrl: './lg-card.component.html',
  styleUrl: './lg-card.component.css',
})
export class LgCardComponent  {
  @Input() article: Article | undefined;


  get author(): string | null {
    return this.article?.author || 'Unknown';
  }

  get publishedDate(): string | null {
    return this.article?.publishedAt || null;
  }

  get newsUrl(): string | null {
    return this.article?.url || null;
  }
}
