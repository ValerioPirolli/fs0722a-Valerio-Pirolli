import { Component, OnInit,  } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {


  constructor(private postSrv:PostService,private activatedRouted:ActivatedRoute) { }


  lastPost=window.location.href.split("/").pop();
  numberx=Number(this.lastPost)

  post=this.postSrv.getPost(this.numberx)



  ngOnInit(): void {

  }

}
