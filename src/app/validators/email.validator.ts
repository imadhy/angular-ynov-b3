import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
  static cannotContainSpaces(control: AbstractControl): ValidationErrors {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpaces: true };
    }

    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'toto@gmail.com') {
          resolve({ shouldBeUnique: true })
        }

        resolve(null);
      }, 2000);
    })
  }
}