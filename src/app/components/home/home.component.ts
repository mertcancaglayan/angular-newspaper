import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SectionComponent } from './section1/section.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsApiService } from '../../services/api.service';

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
  styleUrl: './home.component.css',
})
export class HomeComponent {
  articles: object[] = [];
  sliderArticles: object[] = [];
  error: boolean = false;

  constructor(private apiService: NewsApiService) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.apiService.getTopHeadlines().subscribe(
      (data) => {
        this.sliderArticles = data.articles.slice(0, 3);
        this.articles = data.articles;

        this.error = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.error = true;
      }
    );
  }
}
