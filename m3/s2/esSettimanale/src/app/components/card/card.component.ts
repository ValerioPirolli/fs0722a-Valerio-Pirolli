import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input ()task:any;
  constructor() { }

  ngOnInit(): void {
  }

}
