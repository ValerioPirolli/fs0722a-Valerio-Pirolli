import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private users:User[]=[
  {
    nome:'marco',
    email:'c@fff.com',
    ruolo:'user',
    id:1
  },
  {
    nome:'alessandro',
    email:'c@fff.com',
    ruolo:'user',
    id:2
  },
  {
    nome:'luca',
    email:'c@fff.com',
    ruolo:'user',
    id:3
  },
  {
    nome:'valerio',
    email:'c@fff.com',
    ruolo:'user',
    id:4
  },
  {
    nome:'benito',
    email:'c@fff.com',
    ruolo:'user',
    id:5
  }
]
  constructor() { }

  getUsers(){
    return this.users
  }
  getUser(id:number){
    console.log(this.users.find(user=>user.id==id))
    console.log(Number(window.location.href.split("/").pop()))
    return this.users.find(user=>user.id==id)
  }
}
