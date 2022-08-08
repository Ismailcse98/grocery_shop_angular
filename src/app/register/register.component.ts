import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public fname: string='';
  public lname: string='';
  public email: string='';
  public password: string='';
  public msg:any;

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }
  public register(){
    this.api.register({'fname':this.fname,'lname':this.lname,'email':this.email,'password':this.password}).subscribe((data) => {
      this.msg = data;
      if(this.msg.status){
        this.router.navigate(['login']);
      }else{
        alert("Please Valid information");
      }
    });
  }

}
