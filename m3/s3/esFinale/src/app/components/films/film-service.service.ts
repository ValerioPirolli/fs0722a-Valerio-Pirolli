import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';

export interface Film{
  adult: boolean,
      backdrop_path: string,
      genre_ids: [],
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number
}


@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {


  constructor(private http:HttpClient) { }

  getFilms(){
    this.http.get<Film[]>('http://localhost:4201/movies').pipe(catchError((err)=>{
    console.log(err);
      throw err
    }))
  }


}
