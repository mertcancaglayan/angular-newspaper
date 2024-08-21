import { Component, Input, OnInit } from '@angular/core';
import { PostMetaComponent } from '../post-meta/post-meta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dl-card',
  standalone: true,
  imports: [PostMetaComponent, CommonModule],
  templateUrl: './dl-card.component.html',
  styleUrl: './dl-card.component.css',
})
export class DlCardComponent implements OnInit {
  @Input() article: any;
  @Input() listNumber: number = 0;
  ngOnInit(): void {
    console.log(this.article);
  }

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
