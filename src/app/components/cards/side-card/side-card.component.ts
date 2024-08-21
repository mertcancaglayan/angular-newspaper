import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import {} from '@angular/common';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-side-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css'],
})
export class SideCardComponent {
  @Input() article: Article | undefined;
  @Input() listNumber: number | undefined;

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
