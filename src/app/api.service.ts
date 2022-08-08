import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getProductCat(){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/product_category.php');
  }
  public getProducts(){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/products.php');
  }
  public getProductsDetails(id:any){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/productDetails.php?id='+id);
  }
  public getRelatedProducts(id:any){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/productRelatedProduct.php?id='+id);
  }
  public getCartData(id:any){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/getCartData.php?id='+id);
  }
  public invoice(id:any){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/invoice.php?id='+id);
  }
  public getBlog(){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/login.php');
  }
  public getBlogDetails(id:any){
    return this.http.get('http://localhost/bitl-wdpf/angular/project2/api/blogDetails.php?id='+id);
  }
  public register(data:any){
    return this.http.post('http://localhost/bitl-wdpf/angular/project2/api/register.php',data);
  }
  public login(data:any){
    return this.http.post('http://localhost/bitl-wdpf/angular/project2/api/login.php',data);
  }
  public order(data:any){
    return this.http.post('http://localhost/bitl-wdpf/angular/project2/api/order.php',data);
  }
}
