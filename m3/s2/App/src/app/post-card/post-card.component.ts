import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {


  //dati da visualizzare nella card, l'origine dei dati non dipenda dalla card ma da dove viene usata, quindi lo chiediamo in input e sarà il genitore a dare il valore corretto
  @Input() post!:Post;

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  //il pulsante attiva/disattiva deve interagire con il service e con il component active/inactive
  //service -  per aggiornare i post di riferimento (la modifica si nota dopo aver riletto i dati dal service). Il service si può usare da tutti i components
  //component active/inactive - per far sparire in tempo reale il post, questa operazione va fatta in quel component e solo quel component può interagire con i suoi dati, quindi la card darà un output per segnalare al parent che deve eseguire qualcosa
  // @Output() toggleEmitter = new EventEmitter();
  // toggle() {
  //   this.toggleEmitter.emit(this.post.id);
  // }

}
