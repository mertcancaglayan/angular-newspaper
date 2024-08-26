import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../services/navbar-items.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
})
export class MobileNavbarComponent implements OnInit {
  items: { [key: string]: any } = {};
  categoriesList: string[] = [];
  isMenuClosed: boolean = true;

  toggleMenu() {
    this.isMenuClosed = !this.isMenuClosed;
  }

  constructor(private navbarService: NavbarService) {}

  trackCategory(_index: number, category: string): string {
    return category;
  }

  ngOnInit(): void {
    this.items = this.navbarService.getItems();
    this.categoriesList = this.items['categoriesList'] || [];
    this.isMenuClosed = true;
  }
}
