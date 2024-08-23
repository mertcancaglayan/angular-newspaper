import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Article } from './models/article';
import { NewsApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'angular-newspaper';
  articles: Article[] = [];
  sliderArticles: Article[] = [];
  sidebarArticles: Article[] = [];
  editorsPicksArticles: Article[] = [];
  businessArticles: Article[] = [];
  technologyArticles: Article[] = [];
  popularArticles: Article[] = [];
  recentArticles: Article[] = [];
  error: boolean = false;

  constructor(private apiService: NewsApiService) {}

  ngOnInit(): void {
    this.fetchArticles('general');
    this.fetchArticles('business');
    this.fetchArticles('technology');
    this.fetchPopularArticles();
  }

  fetchArticles(category: string) {
    this.apiService.getTopHeadlines(category || 'general').subscribe(
      (data) => {
        switch (category) {
          case 'general':
            this.sliderArticles = data.articles.slice(0, 3);
            this.sidebarArticles = data.articles.slice(0, 4);
            this.editorsPicksArticles = data.articles.slice(3);
            this.articles = data.articles;
            break;
          case 'business':
            this.businessArticles = data.articles.slice(0, 3);
            break;
          case 'technology':
            this.technologyArticles = data.articles.slice(0, 3);
            break;
        }

        this.error = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.error = true;
      }
    );
  }

  fetchPopularArticles(): void {
    this.apiService.searchArticles().subscribe(
      (data) => {
        this.popularArticles = data.articles.slice(0, 4);
        this.recentArticles = data.articles.slice(4, 7);
        this.error = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.error = true;
      }
    );
  }
}
