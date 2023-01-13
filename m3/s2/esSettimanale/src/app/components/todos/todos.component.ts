import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private td:TodoService) { }

  list:any = this.td.getArr();
  addList = '';
  tatatwa:boolean = false;

  ngOnInit(): void {
    setTimeout(()=> {
      this.tatatwa = true
    },2000)
  }

  arr(){
    setTimeout(() => {
      return this.td.getArr();
    },2000)
  }

  addToArr(input:string){
    setTimeout(() => {
      console.log('ciao')
      console.log(this.list)
      this.td.aggiungi(input)
    }
    ,2000)
  }

  noMoreTrue(a:Todo){
    setTimeout(() => {
      console.log('add')
      console.log(this.list)
      this.td.noMoreTrue(a)
    }
    ,2000)
  }

}
