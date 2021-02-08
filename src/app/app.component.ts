import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { Produit } from './models/porduit.model';
import { MoviesApiService } from './services/movies-api.service';
import { PlaygroundApiService } from './services/playground-api.service';
import { SwapiService } from './services/swapi.service';
import { switchMap } from 'rxjs/operators';
import { People } from './models/people.model';
import { Film } from './models/film.model';

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

  listeDesArticles: Article[];
  articleSelected: Article;

  filmTitle: string;

  constructor(
    private moviesService: MoviesApiService,
    private swapi: SwapiService,
    private pgApi: PlaygroundApiService
  ) { }

  ngOnInit() {
    this.listeMovies = this.moviesService.getMovies();

    this.pgApi.getAllArticle().subscribe((articles: Article[]) => this.listeDesArticles = articles);

    this.swapi.getPeopleById(1).pipe(
      switchMap((people: People) => this.swapi.getFilmByUrl(people.films[people.films.length - 1]))
    ).subscribe((film: Film) => this.filmTitle = film.title);
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

  addArticle() {
    const article: Article = {
      userId: 55,
      title: 'This is a title',
      body: 'This is a body'
    }

    // this.pgApi.createArticle(article).subscribe((article: Article) => console.log(article));
    this.pgApi.createArticle(article).subscribe(console.log);
  }

  deleteArticle(articleId: number) {
    this.pgApi.deleteArticle(articleId).subscribe();
  }

  showArticle(articleId: number) {
    this.pgApi.getArticle(articleId).subscribe(
      (article: Article) => this.articleSelected = article,
      (error) => console.log(error)
    );
  }
}
