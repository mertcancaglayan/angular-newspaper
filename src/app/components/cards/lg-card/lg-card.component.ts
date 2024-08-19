import { Component, Input } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lg-card',
  standalone: true,
  imports: [PostMetaComponent, CommonModule],
  templateUrl: './lg-card.component.html',
  styleUrl: './lg-card.component.css',
})
export class LgCardComponent {
  @Input() article: any;

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
