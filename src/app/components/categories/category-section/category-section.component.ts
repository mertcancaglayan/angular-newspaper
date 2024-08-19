import { Component, OnInit } from '@angular/core';
import { LgCardComponent } from '../../cards/lg-card/lg-card.component';
import { SideCardComponent } from '../../cards/side-card/side-card.component';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../../../services/api.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [LgCardComponent, SideCardComponent, CommonModule],
  templateUrl: './category-section.component.html',
  styleUrls: [
    './category-section.component.css',
    '../../home/home.component.css',
  ],
})
export class CategorySectionComponent implements OnInit {
  category: string | null = null;
  articles: any[] = [];
  popularArticles: any[] = [];
  error: boolean = false;
  currentPage: number = 1;
  articlesPerPage: number = 20;
  totalArticles: number = 0;
  totalPages: number = 0;

  constructor(private route: ActivatedRoute, private newsApi: NewsApiService) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((params) => {
          this.category = params.get('category');
          return this.newsApi.getTopHeadlines(
            this.category || 'general',
            this.currentPage,
            this.articlesPerPage
          );
        })
      )
      .subscribe(
        (data) => {
          this.articles = data.articles;
          this.popularArticles = data.articles;
          this.totalArticles = data.totalResults;
          this.totalPages = Math.ceil(
            this.totalArticles / this.articlesPerPage
          );
          this.error = false;
        },
        (error) => {
          console.error('Error fetching news:', error);
          this.error = true;
        }
      );
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.ngOnInit();
      this.scrollTop();
    }
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  capitalizeFirstLetter(value: string | null): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
