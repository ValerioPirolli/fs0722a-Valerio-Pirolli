import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {


  //visualizzare - raapresenta ciò che c'è a schermo in tempo reale
  posts:Post[] = this.ps.getPostFiltrati(true);

  constructor(private ps:PostService) { }

  ngOnInit(): void {}

  disattiva(id:number) {
    console.log(id);
    //togliere l'elemento dall'array per la visualizzazione
    //questa modifica si vede subito perchè modifica l'array "locale"
    this.posts = this.posts.filter(p=>p.id!=id)
    //aggiornare l'array sul service per le future visualizzazioni
    //questa modifica si noterà alla prima lettura con getPostFiltrati (quindi quando torno in questa pagina)
    this.ps.toggle(id);
  }

}
