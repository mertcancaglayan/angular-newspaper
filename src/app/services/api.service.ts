import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  // private apiKey = '1db44740b1fc4ad3b414d2cfaca1fb51';
  private apiKey = '342e4646489b47bf8f2d1fe156be50df';
  private baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getTopHeadlines(
    category?: string,
    currentPage: number = 1,
    articlesPerPage: number = 20
  ): Observable<any> {
    let url = `${this.baseUrl}/top-headlines?country=us&pageSize=${articlesPerPage}&page=${currentPage}&apiKey=${this.apiKey}`;
    if (category) {
      url += `&category=${category}`;
    }
    return this.http.get(url);
  }

  searchArticles(
    searchQuery?: string,
    currentPage: number = 1,
    articlesPerPage: number = 20
  ): Observable<any> {
    let url = `${this.baseUrl}/everything?q=${searchQuery}&language=en&pageSize=${articlesPerPage}&page=${currentPage}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
