import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import {CartService} from './cart-service';

@Component({
  selector: 'cart',
  template: `
  <span>Items count in cart: {{cart.total}}</span>
  `,
  styles: []
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
