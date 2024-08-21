import { Component, Input } from '@angular/core';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { NavigationRadiosComponent } from './navigation-radios/navigation-radios.component';
import { DlCardComponent } from '../../cards/dl-card/dl-card.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    NavigationButtonsComponent,
    NavigationRadiosComponent,
    DlCardComponent,
    CommonModule,
  ],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css', '../home.component.css'],
})
export class SliderComponent {
  @Input() sliderArticles: Article[] = [];
  @Input() error: boolean = false;
  currentPosition: number = 100;
  currentIndex: number = 0;

  slide(direction: 'next' | 'prev') {
    this.updatePositionAndIndex(direction);
    this.updateSlidesTransform();
    this.updateRadioButtons();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updatePositionFromIndex();
    this.updateSlidesTransform();
    this.updateRadioButtons();
  }

  private updatePositionAndIndex(direction: 'next' | 'prev') {
    if (direction === 'next' && this.currentPosition > -100) {
      this.currentPosition -= 100;
      this.currentIndex += 1;
    } else if (direction === 'prev' && this.currentPosition < 100) {
      this.currentPosition += 100;
      this.currentIndex -= 1;
    } else {
      this.handleEdgeCase(direction);
    }
  }

  private handleEdgeCase(direction: 'next' | 'prev') {
    if (direction === 'prev') {
      this.currentPosition = -100;
      this.currentIndex = 2;
    } else if (direction === 'next') {
      this.currentPosition = 100;
      this.currentIndex = 0;
    }
  }

  private updatePositionFromIndex() {
    const positions = [100, 0, -100];
    this.currentPosition = positions[this.currentIndex];
  }

  private updateSlidesTransform() {
    const slides = document.querySelectorAll<HTMLElement>('.slide');
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${this.currentPosition}%)`;
    });
  }

  private updateRadioButtons() {
    const radios = document.querySelectorAll<HTMLInputElement>(
      '.radio-buttons input[type="radio"]'
    );
    radios.forEach((radio, index) => {
      radio.checked = index === this.currentIndex;
    });
  }
}
