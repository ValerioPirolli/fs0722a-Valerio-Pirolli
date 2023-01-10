import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/interface/post.interface';
import { FetchService } from 'src/app/service/fetch.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  posts:Post[]=[];

  constructor(private postSrv:PostsService, private fetchSrv:FetchService) { }

  ngOnInit(): void {
    this.fetchSrv.getDb().then((x:Post[])=>{
      this.posts=x
    })
  }

}
