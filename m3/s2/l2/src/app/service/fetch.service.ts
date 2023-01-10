import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }

 async getDb(){

      let r=  await (await fetch("/assets/db.json")).json()
      console.log(r);
      return r;
    }

}
