import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usrSrv:UsersService) { }

  users:User[]=this.usrSrv.getUsers();

  ngOnInit(): void {
  }

}
