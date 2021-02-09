import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { People } from '../models/people.model';
import { SwapiService } from '../services/swapi.service';

@Injectable({
  providedIn: 'root'
})
export class NameValidatorsService {

  constructor(private swapi: SwapiService) { }

  uniqueName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.swapi.getPeopleById(1).pipe(
        map((people: People) => {
          if (control.value === people.name) {
            return { shouldBeUnique: true }
          }

          return null
        })
      );
    };
  }
}
