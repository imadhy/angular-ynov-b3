import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from '../validators/email.validator';
import { NameValidatorsService } from '../validators/name-validators.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  loginForm: FormGroup;

  get email() {
    return this.loginForm.get('email');
  }

  get name() {
    return this.loginForm.get('name');
  }

  constructor(private nameValidators: NameValidatorsService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', {
        validators: [],
        asyncValidators: [this.nameValidators.uniqueName()],
        updateOn: 'blur'
      }),
      email: new FormControl('', [Validators.required, EmailValidators.cannotContainSpaces], EmailValidators.shouldBeUnique),
      password: new FormControl('')
    });
  }

}
