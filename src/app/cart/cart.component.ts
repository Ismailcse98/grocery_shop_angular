import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public stringCartData:any;
  public cartInfo:any=[];
  public element:any;
  public subTotal=0;
  public shipping=50;
  public vat:any=0;
  public total:any=0;

  constructor() { }

  ngOnInit(): void {
    this.stringCartData = localStorage.getItem('cart');
    this.cartInfo = JSON.parse(this.stringCartData);

    for (let i = 0; i < this.cartInfo.length; i++) {
      this.subTotal += this.cartInfo[i].size * this.cartInfo[i].price;
    }
    this.vat = ((2/100) * this.subTotal).toFixed(2);
    this.total = this.subTotal + this.shipping + this.total;
  }

  public removeCart(index:any){
    this.cartInfo.splice(index, 1);
    localStorage.setItem('cart',JSON.stringify(this.cartInfo));
  }
  public decBtn(index:any){
    this.element = this.cartInfo[index];
    if(this.element.size>1){
      this.element.size--;
      localStorage.removeItem('cart');
      localStorage.setItem('cart',JSON.stringify(this.cartInfo));
    }else{
      alert('You have to buy minimum one product');
    }
  }
  public incBtn(index:any){
    this.element = this.cartInfo[index];
    this.element.size++;
    localStorage.removeItem('cart');
    localStorage.setItem('cart',JSON.stringify(this.cartInfo));
  }
  public updateCart(){
    window.location.reload();
  }

}
