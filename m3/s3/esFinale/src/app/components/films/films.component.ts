import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Film, FilmServiceService } from './film-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';


  export interface Preferiti{

  }


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films:Film[]=[];

  accountX:any;
  dataFilm:any;
  filmW:any;
  filmCuore:any=[];

  baseUrl='http://image.tmdb.org/t/p/';

  constructor(private filmSrv:FilmServiceService, private http:HttpClient) { }


  ngOnInit(): void {
   // this.filmSrv.getFilms().subscribe((res)=>{
      //this.films=res
    //})

    let userX= localStorage.getItem('user');
    if (userX){
      this.accountX=JSON.parse(userX)
      //console.log(this.accountX.user);
     // console.log(this.accountX.user.id);
    }

    this.http.get<Film[]>('http://localhost:4201/movies-popular').pipe(catchError((err)=>{
      console.log(err);
        throw err
      })).subscribe((res)=>{
       // console.log(res)
        return this.films=res
      })

      this.http.get(`http://localhost:4201/favorites`).subscribe((x)=>{
        this.filmCuore=x
        console.log(this.filmCuore)
      })


    }

    getFilmCuore(film:Film){

      let x;

      x=this.filmCuore.find((element:any)=>{
        if(element.idFilm==film.id){
          return true
        }
        return false
      })
      if(x){
        return true
      }
      return false

    }



    toggleHeart(f:Film){


     // console.log(f);
      let filmx:any;

      this.http.get(`http://localhost:4201/favorites`).subscribe((r)=>{
      filmx=r
      console.log(filmx);

      console.log(this.accountX.user.id)

      this.dataFilm={
        idFilm:f.id,
        accountId:this.accountX.user.id
      }
      console.log(this.dataFilm)

      console.log(this.accountX.user.id)

      filmx.find((e:any)=>{
        if(e.accountId==this.dataFilm.accountId && e.idFilm==this.dataFilm.idFilm){
          this.filmW=e;
          console.log(this.filmW)

      }})

      if( filmx.find((e:any)=>e==this.filmW)){

        return this.http.delete(`http://localhost:4201/favorites/`+this.filmW.id).subscribe();
      }
      {
        return  this.http.post(`http://localhost:4201/favorites`,this.dataFilm).subscribe()
      }
    })

  }

}

