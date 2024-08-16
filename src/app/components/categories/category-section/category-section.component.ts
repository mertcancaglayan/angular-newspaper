import { Component, OnInit } from '@angular/core';
import { LgCardComponent } from '../../cards/lg-card/lg-card.component';
import { SideCardComponent } from '../../cards/side-card/side-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [LgCardComponent, SideCardComponent],
  templateUrl: './category-section.component.html',
  styleUrls: [
    './category-section.component.css',
    '../../home/home.component.css',
  ],
})
export class CategorySectionComponent implements OnInit {
  category: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      if (!this.category) {
        this.category = 'all';
      }
    });
  }

  capitalizeFirstLetter(value: string | null): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
