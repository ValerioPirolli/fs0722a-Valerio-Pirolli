import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { User } from './user.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private authSrv:AuthServiceService, private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${this.authSrv.URL}/users`).pipe(catchError((error)=>{
      console.log(error);
      throw error;
    }))
  }
}
