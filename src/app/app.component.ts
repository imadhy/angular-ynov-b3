import { Component, OnInit } from '@angular/core';
import { Produit } from './models/porduit.model';
import { MoviesApiService } from './services/movies-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'COURS';
  sousTitre: string = '';
  listeMovies: string[];
  imgUrl = 'https://img.20mn.fr/RpiBfhSkREeItU-vP7xX5g/768x492_image-illustration-tigre.jpg';
  col = 5;
  isActive = true;
  email = 'toto@ynov.com';

  produit: Produit = {
    name: 'PC',
    prix: 10999.991,
    qty: 5,
    dateApparition: new Date()
  };


  personnes = [
    {
      name: 'Nicolas',
      isOnline: true
    },
    {
      name: 'Martin',
      isOnline: false
    },
    {
      name: 'Jeremie',
      isOnline: false
    },
    {
      name: 'Medi',
      isOnline: true
    }
  ];

  paragraphe = 'yeyy it\'s working😄';

  constructor(private moviesService: MoviesApiService) { }

  ngOnInit() {
    this.listeMovies = this.moviesService.getMovies();
  }

  onSubmit(e: Event) {
    e.stopPropagation();
    console.log(e);
  }

  onDiv(e?: string) {
    console.log(e);
  }

  onKeyUp() {
    console.log(this.title);
    console.log(this.email);
  }
}
