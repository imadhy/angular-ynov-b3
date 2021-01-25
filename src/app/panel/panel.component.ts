import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllPeople, People } from '../models/people.model';
import { Produit } from '../models/porduit.model';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  isTrue = true;
  viewMode = 'toto';

  produits: Produit[] = [
    { id: 1, name: 'PC' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Tele' }
  ];

  personne = {
    name: 'Nicolas',
    age: 21,
    addresse: {
      no: 3,
      rue: 'toto le marshall',
      codePostal: 44300
    }
  }

  peoples: People[];
  getPeopleSubscription: Subscription;

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.getPeopleSubscription = this.swapi.getAllPeople().subscribe((allPeople: AllPeople) => {
      this.peoples = allPeople.results;
    });
  }

  ngOnDestroy() {
    this.getPeopleSubscription.unsubscribe();
  }

  changerAffichage() {
    this.isTrue = !this.isTrue;
  }

  addProduit() {
    this.produits.push({ id: 4, name: 'plop' });
  }

  trackPeroduitId(index, produit: Produit) {
    return produit ? produit.id : undefined;
  }
}
