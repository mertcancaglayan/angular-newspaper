import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarService } from '../../../services/navbar-items.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: { [key: string]: any } = {};
  categoriesList: string[] = [];

  constructor(private navbarService: NavbarService, private router: Router) {}

  trackCategory(_index: number, category: string): string {
    return category;
  }

  ngOnInit(): void {
    this.items = this.navbarService.getItems();
    this.categoriesList = this.items['categoriesList'] || [];
  }
}
