import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from '../validators/email.validator';
import { NameValidatorsService } from '../validators/name-validators.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  loginForm: FormGroup;
  topicForm: FormGroup;

  get email() {
    return this.loginForm.get('email');
  }

  get name() {
    return this.loginForm.get('name');
  }

  get topics() {
    return this.topicForm.get('topics') as FormArray;
  }

  constructor(private nameValidators: NameValidatorsService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      name: ['', [Validators.required], [this.nameValidators.uniqueName()]],
      email: [],
      password: [],
      adresse: this.fb.group({
        rue: [],
        codePostale: []
      })
    });

    this.loginForm = new FormGroup({
      name: new FormControl('', {
        validators: [],
        asyncValidators: [this.nameValidators.uniqueName()],
        updateOn: 'blur'
      }),
      email: new FormControl('', [Validators.required, EmailValidators.cannotContainSpaces], EmailValidators.shouldBeUnique),
      password: new FormControl(''),
      adresse: new FormGroup({
        rue: new FormControl(),
        codePostale: new FormControl()
      })
    });

    this.topicForm = new FormGroup({
      topics: new FormArray([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
