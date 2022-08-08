import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLinkActive } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public id:any;
public productDetails:any;
public catId:any;
public relatedProduct:any;

// cart information
public product:any;
public productsInfo:any=[];
public prevCartInfo:any;
public isTrue=true;

  constructor(private api:ApiService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((route:ParamMap)=>{
      this.id = route.get('id');
      this.api.getProductsDetails(this.id).subscribe((data)=>{
        this.productDetails = data;
        this.catId = this.productDetails.cat_id;
          this.api.getRelatedProducts(this.catId).subscribe((data)=>{
            this.relatedProduct = data;
          });
      });
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
