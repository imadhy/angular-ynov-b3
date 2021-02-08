import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Article } from '../models/article.model';
import { map, catchError } from 'rxjs/operators';

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

  getArticle(articleId): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${this.ARTICLE_RESSOURCE}/${articleId}`).pipe(
      map((article: Article) => {
        return {
          ...article,
          title: 'Toto',
          isChecked: false
        };
      }),
      catchError((error: Response) => {
        if (error.status === 404) {
          return throwError(`Article not found`);
        }
      })
    );
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/${this.ARTICLE_RESSOURCE}`, article);
  }

  deleteArticle(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.ARTICLE_RESSOURCE}/${articleId}`);
  }
}
