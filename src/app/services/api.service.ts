import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private apiKey = '1db44740b1fc4ad3b414d2cfaca1fb51';
  // private apiKey = '676f017549224f488970f1835f9db971';
  private baseUrl = 'https://newsapi.org/v2/top-headlines?country=us';

  constructor(private http: HttpClient) {}

  getTopHeadlines(category?: string): Observable<any> {
    let url = `${this.baseUrl}&apiKey=${this.apiKey}`;
    if (category) {
      url += `&category=${category}`;
    }
    return this.http.get(url);
  }
}
