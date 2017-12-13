import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';
import {ProductService} from './product.service';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
