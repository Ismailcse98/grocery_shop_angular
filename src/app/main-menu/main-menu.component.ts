import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public totalCart = 0;
  public stringCart:any;
  public cart:any=[];
  public checkLogin = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.stringCart = localStorage.getItem('cart');
    this.cart = JSON.parse(this.stringCart);
    this.totalCart  = this.cart.length;

    if(localStorage.getItem('user')){
      this.checkLogin = true;
    }else{
      this.checkLogin = false;
    }
  }
  public logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
