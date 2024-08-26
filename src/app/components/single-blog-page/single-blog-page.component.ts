import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/article';
import { HomeComponent } from '../home/home.component';
import { NewsApiService } from '../../services/api.service';
import { SideCardComponent } from '../cards/side-card/side-card.component';
import { CommonModule } from '@angular/common';
import { PostMetaComponent } from '../cards/post-meta/post-meta.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-single-blog-page',
  standalone: true,
  imports: [
    SideCardComponent,
    CommonModule,
    PostMetaComponent,
    HeaderComponent,
  ],
  templateUrl: './single-blog-page.component.html',
  styleUrls: ['./single-blog-page.component.css', '../home/home.component.css'],
})
export class SingleBlogPageComponent extends HomeComponent {
  article: Article | undefined;

  constructor(private router: Router, apiService: NewsApiService) {
    super(apiService);
    const navigation = this.router.getCurrentNavigation();
    this.article = navigation?.extras?.state?.['article'];
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  get author(): string | null {
    return this.article?.author || 'Unknown';
  }

  get publishedDate(): string | null {
    return this.article?.publishedAt || null;
  }
}
