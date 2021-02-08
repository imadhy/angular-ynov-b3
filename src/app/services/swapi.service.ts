import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { AllPeople, People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  readonly apiUrl = 'https://swapi.dev/api';
  readonly PEOPLE_RESSOURCE = 'people';
  readonly FILMS_RESSOURCE = 'films';

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<AllPeople> {
    return this.http.get<AllPeople>(`${this.apiUrl}/${this.PEOPLE_RESSOURCE}`);
  }

  getPeopleById(id: number): Observable<People> {
    return this.http.get<People>(`${this.apiUrl}/${this.PEOPLE_RESSOURCE}/${id}`);
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${this.FILMS_RESSOURCE}/${id}`);
  }

  getFilmByUrl(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }
}
