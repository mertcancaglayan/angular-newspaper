import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-md-v-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './md-v-card.component.html',
  styleUrl: './md-v-card.component.css',
})
export class MdVCardComponent {
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
