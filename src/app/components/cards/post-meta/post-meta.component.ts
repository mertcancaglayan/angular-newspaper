import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-meta',
  standalone: true,
  imports: [],
  templateUrl: './post-meta.component.html',
  styleUrl: './post-meta.component.css',
  providers: [DatePipe],
})
export class PostMetaComponent {
  @Input() author: string | null = null;
  @Input() publishedDate: string | null = null;
  @Input() newsUrl: string | null = null;

  constructor(private datePipe: DatePipe) {}

  get formattedDate(): string {
    if (this.publishedDate) {
      return this.datePipe.transform(this.publishedDate, 'MMM d') || '';
    }
    return '';
  }
}
