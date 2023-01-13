import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todo:Todo[]=[]

  constructor() { }

  getArr(){
    console.log(this.todo)
    return this.todo
  }

  aggiungi(input:string){
    this.todo.push({id:this.todo.length + 1, title: input, completed:false});
  }

  noMoreTrue(p:Todo){
    p.completed = true
  }
  delete(n:number){
    for( var i = 0; i < this.todo.length; i++){
      if ( this.todo[i].id === n) {
          this.todo.splice(i, 1);
          i--;
      }
  }
  }

}
