import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { SingleBlogPageComponent } from './components/single-blog-page/single-blog-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single-blog-page', component: SingleBlogPageComponent },
  { path: '**', redirectTo: 'home' },
];
