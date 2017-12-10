import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
