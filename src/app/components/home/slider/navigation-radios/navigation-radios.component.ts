import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-radios',
  standalone: true,
  imports: [],
  templateUrl: './navigation-radios.component.html',
  styleUrl: './navigation-radios.component.css',
})
export class NavigationRadiosComponent {
  @Output() slideToEvent = new EventEmitter<number>();

  goToSlide(direction: number) {
    this.slideToEvent.emit(direction);
  }
}
