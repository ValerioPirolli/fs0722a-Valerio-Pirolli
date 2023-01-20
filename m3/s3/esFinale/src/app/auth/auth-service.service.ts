import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export interface SignupData{
  name:string,
  email:string,
  password:string
}

export interface LoginData {
  email:string,
  password:string
}

export interface AuthData{
  accessToken:string,
  user:{
    email:string,
    id:number,
    name:string
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  jwtHelper=new JwtHelperService();
  URL='http://localhost:4201';

  private authSubject=new BehaviorSubject<null|AuthData>(null);
  userObs$=this.authSubject.asObservable();
  areYouLoggedIn$=this.userObs$.pipe(map(user=>!!user))

  autoLogOutTimer:any;

  constructor(private http:HttpClient, private router:Router) {
    this.autoLogin();
  }


  autoLogin(){
    const userJson=localStorage.getItem('user');
    if(!userJson){
      return;
    }

    const account:AuthData= JSON.parse(userJson);

    if(this.jwtHelper.isTokenExpired(account.accessToken)){
      return;
    }

    this.authSubject.next(account);

    const expirationDate= this.jwtHelper.getTokenExpirationDate(account.accessToken) as Date;

    console.log(expirationDate);

    this.autoLogOut(expirationDate);

  }

  autoLogOut(expirationDate:Date){
   const expirationInMilliSeconds=expirationDate.getTime() - new Date().getTime();
   this.autoLogOutTimer=setTimeout(()=>{
    this.logOut();
   }, expirationInMilliSeconds);
  }

  logOut(){
    this.authSubject.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('user');

    if(this.autoLogOutTimer){
      clearTimeout(this.autoLogOutTimer)
    }
  }

  logIn(data:LoginData){
    return this.http.post<AuthData>(`${this.URL}/login`, data).pipe(tap((valori)=>{
      this.authSubject.next(valori);

      console.log(valori);

      localStorage.setItem('user', JSON.stringify(valori));

      const expirationDate= this.jwtHelper.getTokenExpirationDate(valori.accessToken) as Date;

      console.log(expirationDate);

    this.autoLogOut(expirationDate);
    }),
    catchError(this.errors)
    );
  }

  signUp(registrazione:SignupData){
    return this.http.post(`${this.URL}/register`,registrazione).pipe(catchError(this.errors));
  }


  private errors(err:any){
    switch(err.error){
      case "Email and password are required":
        alert ('Email e password sono obbligatorie');
        return throwError('Email e password sono obbligatorie');
        break;

        case "Email already exists":
          alert ('Utente già registrato');
          return throwError('Utente già registrato');
          break;

          case "Email format is invalid":
            alert ('Email scritta male');
            return throwError('Email scritta male');
            break;

            case "Cannot find user":
              alert ('Utente non esiste');
              return throwError('Utente non esiste');
              break;

              default:
                console.log(err);
                alert ('Errore nella chiamata');
                return throwError('Errore nella chiamata');
    }
   }




}
