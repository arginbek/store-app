import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';
import {ProductService} from './product.service';
import { CartModule } from './cart/cart.module';
import { ProductIdValidatorDirective } from './validators/product-id.validator.directive';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductDetailComponent, ProductIdValidatorDirective
  ],
  imports: [
    BrowserModule, FormsModule, CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
