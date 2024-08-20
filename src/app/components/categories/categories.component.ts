import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CategorySectionComponent } from "./category-section/category-section.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CategorySectionComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {}
