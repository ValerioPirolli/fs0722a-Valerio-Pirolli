import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private authSrv:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm(f:NgForm){
    console.log(f.value)
      this.authSrv.logIn(f.value).subscribe(()=>{
      this.router.navigate(['/films'])
    })
  }

}
