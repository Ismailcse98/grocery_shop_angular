import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { InvoiceComponent } from './invoice/invoice.component';


const appRoutes : Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'productCat', component: ProductCategoryComponent},
  {path: 'productDetails/:id', component: ProductDetailsComponent},
  {path: 'allnews', component: AllNewsComponent},
  {path: 'blogDetails/:id', component: BlogDetailsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'/home', pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    MainFooterComponent,
    AllNewsComponent,
    SearchComponent,
    ContactComponent,
    ProductCategoryComponent,
    BlogDetailsComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
