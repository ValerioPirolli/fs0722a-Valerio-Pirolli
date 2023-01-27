import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authSrv:AuthServiceService,private router:Router ) { }

  ngOnInit(): void {
  }

  signUpForm(f:NgForm){
      console.log(f.value);
      this.authSrv.signUp(f.value).subscribe(()=>{
        this.router.navigate(['login']);
      })
  }

}
