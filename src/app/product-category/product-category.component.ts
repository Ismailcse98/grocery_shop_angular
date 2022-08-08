import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  public products:any;

  // cart information
  public product:any;
  public productsInfo:any=[];
  public prevCartInfo:any;
  public isTrue=true;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
      this.products = data;
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
