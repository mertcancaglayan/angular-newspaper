import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchAreaComponent } from './search-area/search-area.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchAreaComponent, RouterLink],
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent {}
