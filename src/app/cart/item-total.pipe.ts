import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../Product';

@Pipe({
  name: 'itemTotal'
})
export class ItemTotalPipe implements PipeTransform {

  // transform(item: CartItem, qty: number = 0) {
  //   return item.product.price * qty;
  // }

  transform(item: Product, qty: number = 0) {
    return item.price * qty;
  }

}
