import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public stringCartInfo:any;
  public cartInfo:any;
  public shippingInfo:any = 50;
  public subTotal:any = 0;
  public total:any=0;
  public vat:any=0;
  public msg:any;

  // User Info
  public userInfo:any;
  public customer:any;
  public customer_id:any;
  public fname:string='';
  public lname:string='';
  public country:string='';
  public postCode:string='';
  public email:string='';
  public phone:string='';
  public address:string='';
  public payment:string='';

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }
  this.userInfo = localStorage.getItem('user');
  this.customer = JSON.parse(this.userInfo);
  this.customer_id = this.customer.id;

  this.stringCartInfo =localStorage.getItem('cart');
  this.cartInfo = JSON.parse(this.stringCartInfo);
  for (let i = 0; i < this.cartInfo.length; i++) {
    this.subTotal += this.cartInfo[i].size * this.cartInfo[i].price;
  }
  this.vat = ((2/100) * this.subTotal).toFixed(2);
  this.total = this.subTotal + this.shippingInfo;

  }

  public placeOrder(){
    this.api.order({customer_id:this.customer_id,cart:this.cartInfo,fname:this.fname,lname:this.lname,total:this.total,country:this.country,postCode:this.postCode,email:this.email,phone:this.phone,address:this.address,payment:this.payment}).subscribe((data)=>{
      this.msg = data;
      if (this.msg.status) {
        localStorage.setItem('invoiceId',this.msg.orderId);
        localStorage.removeItem('cart');
        this.router.navigate(['/invoice']);
      }
    });
  }
}
