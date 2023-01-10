import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/interface/post.interface';
import { FetchService } from 'src/app/service/fetch.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts:Post[]=this.postSrv.getPosts();

  constructor(private postSrv:PostsService,private fetchSrv:FetchService) { }

  ngOnInit(): void {

    this.fetchSrv.getDb().then((x:Post[])=>{
      this.posts=x
    })
  }

}
