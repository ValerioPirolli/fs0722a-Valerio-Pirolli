import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private userSrv:UsersService,private activatedRouted:ActivatedRoute) { }


  lastPart:any;
  userList:any;


  ngOnInit(): void {
    this.lastPart=this.activatedRouted.snapshot.params["id"];
    //this.lastPart = window.location.href.split("/").pop();
    let numberx=Number(this.lastPart)


    this.userList=this.userSrv.getUser(numberx)
  }



}
