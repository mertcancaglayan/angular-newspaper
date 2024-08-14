import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: HomeComponent },
  { path: 'business', component: HomeComponent },
  { path: 'entertainment', component: HomeComponent },
  { path: 'general', component: HomeComponent },
  { path: 'health', component: HomeComponent },
  { path: 'science', component: HomeComponent },
  { path: 'sports', component: HomeComponent },
  { path: 'technology', component: HomeComponent },
  { path: '**', redirectTo: '#' },
];
