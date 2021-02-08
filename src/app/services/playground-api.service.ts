import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundApiService {
  readonly apiUrl = 'https://jsonplaceholder.typicode.com';
  readonly ARTICLE_RESSOURCE = 'posts';

  constructor(private http: HttpClient) { }

  getAllArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/${this.ARTICLE_RESSOURCE}`);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/${this.ARTICLE_RESSOURCE}`, article);
  }

  deleteArticle(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.ARTICLE_RESSOURCE}/${articleId}`);
  }
}
