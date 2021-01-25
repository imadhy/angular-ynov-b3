import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-affichage',
  template: `<p (click)="envoyer()">{{ paragrapheAfficher }}</p>`,
})
export class AffichageComponent implements OnInit {
  @Input('paragraphe') paragrapheAfficher: string = 'Pas de text';
  @Output() onSave = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  envoyer() {
    this.onSave.emit('Le bus arrive');
  }

}
