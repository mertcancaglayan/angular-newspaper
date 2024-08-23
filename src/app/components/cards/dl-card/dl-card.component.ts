import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dl-card',
  standalone: true,
  imports: [PostMetaComponent, CommonModule, RouterLink],
  templateUrl: './dl-card.component.html',
  styleUrl: './dl-card.component.css',
})
export class DlCardComponent {
  @Input() article: Article | undefined;
  @Input() listNumber: number = 0;

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
