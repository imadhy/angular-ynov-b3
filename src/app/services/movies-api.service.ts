import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  ruels = `
    Creer deux directive !
    1ere directive :
      Creer deux input :
        - La premiere input va prendre les chiffres d'une carte de credit, qui va a la volée 
        mettre les espaces adequats
        - La deuxieme input, vous tappez la date d'expiration, et ca va automatiquement a 
        la volée le transformer avec un slash (ex : 1220 -> 12/20)

    2eme directive :
      creer 1 input de type text, qui va prendre un numero francais au format 0611223355, 
      et lorsqu'on sort de l'input va transformer ce numero en numero international francais
      au format : +33 6 11 22 33 55
  `;

  constructor() { }

  getMovies(): string[] {
    return ['Avengers', 'PdC', 'Interstellar', 'Inception'];
  }
}
