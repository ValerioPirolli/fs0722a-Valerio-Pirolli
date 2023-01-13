import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  constructor(private td:TodoService) { }

  list=this.td.getArr();
  addList = '';
  tatatwa:boolean = false;

  ngOnInit(): void {
    setTimeout(()=> {
      this.tatatwa = true
    },2000)
  }

  distruggi(a:number){
    setTimeout(() => {
      this.td.delete(a)
    }
    ,2000)
  }
}
