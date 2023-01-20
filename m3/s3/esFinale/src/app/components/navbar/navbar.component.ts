import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;

  constructor(private authSrv:AuthServiceService) { }

  ngOnInit(): void {
    this.authSrv.areYouLoggedIn$.subscribe((isLoggedIn)=>{
      this.isLoggedIn=isLoggedIn;
    })
  }

  onLogOut(){
    this.authSrv.logOut();
  }


}
