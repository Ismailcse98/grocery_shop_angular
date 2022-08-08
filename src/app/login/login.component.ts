import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string='';
  public password: string='';
  public customerInfo:any;
  public checkLogin:any;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }
  public login(){
    this.api.login({email:this.email,password:this.password}).subscribe((data) => {
      this.customerInfo = data;
      localStorage.setItem('user',JSON.stringify(this.customerInfo));
      this.router.navigate(['/home']);
    });
  }

}
