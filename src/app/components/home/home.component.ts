import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
