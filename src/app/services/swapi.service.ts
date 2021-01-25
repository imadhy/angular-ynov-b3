import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllPeople, People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  readonly apiUrl = 'https://swapi.dev/api';
  readonly PEOPLE_RESSOURCE = 'people';

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<AllPeople> {
    return this.http.get<AllPeople>(`${this.apiUrl}/${this.PEOPLE_RESSOURCE}`);
  }

  getPeopleById(id: number): Observable<People> {
    return this.http.get<People>(`${this.apiUrl}/${this.PEOPLE_RESSOURCE}/${id}`);
  }
}
