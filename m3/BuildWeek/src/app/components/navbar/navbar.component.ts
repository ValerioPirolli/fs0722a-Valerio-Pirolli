import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authSrv:AuthServiceService) { }

  user:any;

  ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.user=JSON.parse(this.user);
  }
  Onlogout(){
    this.authSrv.logOut();
    }


}
