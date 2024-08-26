import { Component } from '@angular/core';
import { HeaderTopComponent } from './header-top/header-top.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderTopComponent, NavbarComponent, MobileNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentSearchQuery: string = '';

  onSearchQueryChange(query: string): void {
    this.currentSearchQuery = query;
  }
}
