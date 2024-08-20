import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SearchedSectionComponent } from "./searched-section/searched-section.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SearchedSectionComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

}
