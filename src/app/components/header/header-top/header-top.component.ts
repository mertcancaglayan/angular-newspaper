import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchAreaComponent } from "./search-area/search-area.component";


@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchAreaComponent],
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent {}
