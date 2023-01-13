import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //riferimento per tutti i post - verrà letto dai component che devono visualizzare questi dati
  allPosts:Post[] = [];

  fetchData() {
    //Lettura dati da file json a array di riferimento del service
    fetch("assets/db.json").then(res=>res.json()).then(res=>{
      this.allPosts = res
      console.log(res);
    })
  }

  getPostFiltrati(a: boolean) {
    //lettura sincrona dei post a partire dall'array del service
    return this.allPosts.filter(p=>p.active==a)
  }

  toggle(id:number) {
    //inveerte active del post con l'id indicato (modificando l'array del service)
    //questa modifica si noterà alla prima lettura con getPostFiltrati
    this.allPosts = this.allPosts.map((p)=>{
      if(p.id==id) p.active = !p.active
      return p
    })
    //qua modifico il db
  }

  getPost(id:number){
    console.log(this.allPosts.find(post=>post.id==id))
    return this.allPosts.find(post=>post.id==id)
  }

  constructor() {
    //per leggere i dati all'inizio
    this.fetchData()
    //!!!ATTENZIONE
    //essendo questa una lettura asincrona è possibile che getPostFiltrati() dei component active/inactive venga eseguita prima del completamento di questa logica, quindi i componenti leggerebero un array vuoto la prima volta (puoi notarlo ricaricando la pagina da /active, finche non cambi pagina e rientri in active non vedrai nessun post)
  }
}
