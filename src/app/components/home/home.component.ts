import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SectionComponent } from './section1/section.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsApiService } from '../../services/api.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SliderComponent,
    SectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
    this.loadArticles();
    this.loadPopularArticles();
  }

  private loadArticles(): void {
    const categories = ['general', 'business', 'technology'];
    categories.forEach((category) => this.fetchArticles(category));
  }

  private fetchArticles(category: string): void {
    this.apiService.getTopHeadlines(category).subscribe(
      (data) => {
        this.handleArticles(data.articles, category);
        this.error = false;
      },
      (error) => this.handleError(error)
    );
  }

  private handleArticles(articles: Article[], category: string): void {
    const newArticles = [...articles];
    switch (category) {
      case 'general':
        this.sliderArticles = newArticles.slice(0, 3);
        this.sidebarArticles = newArticles.slice(4, 8);
        this.editorsPicksArticles = newArticles.slice(8);
        this.articles = newArticles;
        break;
      case 'business':
        this.businessArticles = newArticles.slice(0, 3);
        break;
      case 'technology':
        this.technologyArticles = newArticles.slice(0, 3);
        break;
    }
  }

  private loadPopularArticles(): void {
    this.apiService.searchArticles().subscribe(
      (data) => {
        this.popularArticles = data.articles.slice(0, 4);
        this.recentArticles = data.articles.slice(4, 7);
        this.error = false;
      },
      (error) => this.handleError(error)
    );
  }

  private handleError(error: any): void {
    console.error('Error fetching news:', error);
    this.error = true;
  }
}
