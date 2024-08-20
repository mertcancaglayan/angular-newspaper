import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-search-area',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
})
export class SearchAreaComponent {
  searchQuery: string = '';

  constructor(private router: Router, private searchService: SearchService) {}

  onSearch(event: Event): void {
    event.preventDefault();

    if (this.searchQuery.trim()) {
      this.searchService.setSearchQuery(this.searchQuery);

      this.router.navigate(['/search'], {
        queryParams: { q: this.searchQuery },
      });
    }
  }
}
