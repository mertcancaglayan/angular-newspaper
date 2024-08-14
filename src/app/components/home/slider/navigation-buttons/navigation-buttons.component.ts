import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [],
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css'],
})
export class NavigationButtonsComponent {
  @Output() slideEvent = new EventEmitter<'next' | 'prev'>();

  slide(direction: 'next' | 'prev') {
    this.slideEvent.emit(direction);
  }
}
