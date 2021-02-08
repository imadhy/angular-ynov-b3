import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  ruels = `
    Afficher le titre du dernier film dans lesquel la planet 1 est apparue

    Faire un appel rest sur la premiere planete dans l'api swapi https://swapi.dev/api/planets/1/
    Ensuite avec les donnees recuperer, faire un deuxieme appel rest avec le dernier film des resultats
    afficher le titre du film dans l'html
  `;

  constructor() { }

  getMovies(): string[] {
    return ['Avengers', 'PdC', 'Interstellar', 'Inception'];
  }
}
