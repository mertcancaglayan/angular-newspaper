import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-card',
  standalone: true,
  imports: [PostMetaComponent, RouterLink],
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
