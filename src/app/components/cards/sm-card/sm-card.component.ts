import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { Article } from '../../../models/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sm-card',
  standalone: true,
  imports: [PostMetaComponent, CommonModule],
  templateUrl: './sm-card.component.html',
  styleUrl: './sm-card.component.css',
})
export class SmCardComponent {
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
