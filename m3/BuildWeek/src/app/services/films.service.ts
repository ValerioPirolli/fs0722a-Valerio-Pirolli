import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {



  constructor(private http:HttpClient) { }



  getFilms(){
     this.http.get('http://localhost:4201/films')
     .subscribe((x)=>{
      console.log(x)
      return x

     })
  }


  getReviews(){
    this.http.get("http://localhost:4201/reviews").subscribe((x) => {
      return   x
      })
}

  postReview(review:Review){
    this.http.post<Review>('http://localhost:4201/reviews', review).subscribe((x)=>{
      return x
    })
  }

  deleteReview(review:Review){
    this.http.delete("http://localhost:4201/reviews/" + review.id)
  }

  putReview(review:Review,reviewUpdated:Review){
    this.http.put("http://localhost:4201/reviews/" + review.id,reviewUpdated)
  }

}
