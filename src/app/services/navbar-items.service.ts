import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private items = {
    home: 'home',
    categories: 'categories',
    categoriesList: [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
    ],
    contact: 'contact',
    aboutMe: 'about me',
  };

  getItems(): { [key: string]: any } {
    return this.items;
  }
}
