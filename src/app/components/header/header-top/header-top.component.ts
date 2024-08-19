import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent {
  searchQuery: string = '';
  articles: any[] = [];

  constructor(private apiService: NewsApiService, private router: Router) {}

  onSearch(event: Event): void {
    event.preventDefault();

    if (this.searchQuery.trim()) {
      this.router.navigate([], {
        queryParams: { q: this.searchQuery },
        queryParamsHandling: 'merge',
      });

      this.apiService.searchArticles(this.searchQuery).subscribe(
        (data) => {
          this.articles = data.articles;
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }
}
