import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from './cart';
import { CartService } from './cart-service';
import { CartComponent } from './cart.component';
import { CartDetailComponent } from './cart-detail.component';
import { ItemTotalPipe } from './item-total.pipe';
import { MapValuesPipe } from './map-values.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CartComponent, CartDetailComponent],
  declarations: [CartComponent, CartDetailComponent, ItemTotalPipe, MapValuesPipe],
  providers: [Cart, CartService]
})
export class CartModule { }
