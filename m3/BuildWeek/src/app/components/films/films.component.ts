import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmsService } from 'src/app/services/films.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Review } from 'src/app/interfaces/review';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films!: any;
  mostra = false;

  voto: number = 1;
  titolo: string = "";
  testo: string = "";

  modificaReview = 0;

  reviews: any;

  account2: any;

  votoM:any;
  titoloM:any;
  testoM:any;


  review: Review = {
    id: 0,
    author: "",
    text_body: "",
    title: "",
    rating: 1,
    account_id: 0,
    film_id: 0
  }

  reviewUpdated: Review = {
    id: 0,
    author: "",
    text_body: "",
    title: "",
    rating: 1,
    account_id: 0,
    film_id: 0
  }

  sortedArrayFilm:Film[]=[];
  top10:Film[]=[];


  constructor(private filmSrv: FilmsService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4201/films').subscribe((x: any) => {
      this.films = x
      console.log(this.films);
    });

    let account1 = localStorage.getItem('user');
    if (!account1) { } else {
      this.account2 = JSON.parse(account1);
      console.log(this.account2)
    }

    this.http.get("http://localhost:4201/reviews").subscribe((x) => {
      this.reviews = x
      console.log(this.reviews)
    })


    this.http.get('http://localhost:4201/films').subscribe((b:any) => {

      this.sortedArrayFilm=b.sort((a:Film,b:Film)=>{
        return  b.popularity-a.popularity
       })

       for(let i=0;i<10;i++){
         this.top10.push(this.sortedArrayFilm[i])
       }
       console.log(this.top10)

       console.log(this.sortedArrayFilm)
    });


  }

  mostraOff() {
    this.mostra = false
  }

  provaRecensione() {

    let data = new Date();
    let data2=data.getTime()
    console.log(data2)

    this.review = {
      id: data2,
      author: this.account2.user.name,
      text_body: this.testo,
      title: this.titolo,
      rating: this.voto,
      account_id: this.account2.user.id,
      film_id: this.films[40].id
    }
    console.log(this.review)

    this.http.post<Review>('http://localhost:4201/reviews', this.review).subscribe(x => {
      console.log(x)
      this.reviews.push(this.review)
    })


    this.voto = 1;
    this.titolo = "";
    this.testo = "";

  }

  deleteReview(review: Review) {
    this.http.delete("http://localhost:4201/reviews/" + review.id).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews").subscribe((x) => {
        this.reviews = x
      })
    })
    this.modificaReview = 0;
  }

  modifica(review: Review) {
    /*
    this.voto = review.rating;
    this.titolo = review.title;
    this.testo = review.text_body;

    console.log(this.voto, this.titolo, this.testo);
    */

    this.votoM = review.rating;
    this.titoloM = review.title;
    this.testoM = review.text_body;

    this.modificaReview = review.id;

  }

  updateReview(review: Review) {
/*
    this.reviewUpdated.rating = this.voto;
    this.reviewUpdated.title = this.titolo;
    this.reviewUpdated.text_body = this.testo;
    this.reviewUpdated.account_id = this.account2.user.id;
    this.reviewUpdated.author = this.account2.user.name;
    this.reviewUpdated.film_id = review.film_id;
*/
this.reviewUpdated.rating = this.votoM;
this.reviewUpdated.title = this.titoloM;
this.reviewUpdated.text_body = this.testoM;
this.reviewUpdated.account_id = this.account2.user.id;
this.reviewUpdated.author = this.account2.user.name;
this.reviewUpdated.film_id = review.film_id;

    this.http.put("http://localhost:4201/reviews/" + review.id, this.reviewUpdated).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews").subscribe((x) => {
        this.reviews = x
      })
    })

    this.voto = 1;
    this.titolo = "";
    this.testo = "";



    this.votoM = 1;
    this.titoloM = "";
    this.testoM = "";

    this.modificaReview = 0;


  }

  chiudiPopUp(){
    this.modificaReview = 0;
  }

}


