import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LgCardComponent } from '../../cards/lg-card/lg-card.component';
import { SearchService } from '../../../services/search.service';
import { NewsApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searched-section',
  standalone: true,
  imports: [LgCardComponent, CommonModule],
  templateUrl: './searched-section.component.html',
  styleUrls: [
    './searched-section.component.css',
    '../../home/home.component.css',
  ],
})
export class SearchedSectionComponent implements OnInit {
  searchedQuery: string = '';
  articles: object[] = [];
  error: boolean = false;
  currentPage: number = 1;
  articlesPerPage: number = 20;
  totalArticles: number = 0;
  totalPages: number = 0;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private apiService: NewsApiService
  ) {}

  // ngOnInit(): void {
  //   this.searchService.searchQuery.subscribe((query: string) => {
  //     this.searchedQuery = query;
  //     if (this.searchedQuery.trim()) {
  //       this.fetchArticles(this.searchedQuery);
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.searchedQuery = params.get('q') || '';
      if (this.searchedQuery.trim()) {
        this.fetchArticles(this.searchedQuery);
      }
    });
  }

  fetchArticles(query: string): void {
    this.apiService.searchArticles(query).subscribe(
      (data) => {
        this.articles = data.articles;
        console.log(this.articles);
        this.totalArticles = data.totalResults;
        this.totalPages = Math.ceil(this.totalArticles / this.articlesPerPage);
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
