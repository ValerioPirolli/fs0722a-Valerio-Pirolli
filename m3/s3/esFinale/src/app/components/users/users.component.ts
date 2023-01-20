import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private authSrv:AuthServiceService, private http:HttpClient) { }

  user:any;

  ngOnInit(): void {

    this.user=localStorage.getItem('user');
    this.user=JSON.parse(this.user)

console.log(this.user)
  }


}
