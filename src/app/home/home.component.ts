import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productCat:any;
  public products:any;
  public blog:any;

  // cart information
  public product:any;
  public productsInfo:any=[];
  public prevCartInfo:any;
  public isTrue=true;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProductCat().subscribe((data)=>{
      this.productCat=data;
      // console.log(this.productCat);
    });
    this.api.getProducts().subscribe((data)=>{
      this.products = data;
    });
    this.api.getBlog().subscribe((data)=>{
      this.blog = data;
    });
  }

  public addToCart(id:any){
    this.api.getCartData(id).subscribe((data)=>{
      this.product=data;
      if (localStorage.getItem('cart')) {
        this.prevCartInfo = localStorage.getItem('cart');
        this.productsInfo = JSON.parse(this.prevCartInfo);
        for (let i = 0; i < this.productsInfo.length; i++) {
          let element = this.productsInfo[i].id;
          if (element == id) {
            this.isTrue = false;
          }
        }
        if(this.isTrue){
        this.productsInfo.push({id:this.product.id,name:this.product.name,price:this.product.price,size:this.product.size,img:this.product.main_img});
        }else{
          alert('This product already added');
        }
      }else{
        this.productsInfo.push({id:this.product.id,name:this.product.name,price:this.product.price,size:this.product.size,img:this.product.main_img});
      }
      localStorage.setItem('cart',JSON.stringify(this.productsInfo));
      this.isTrue = true;
    });
  }

}
