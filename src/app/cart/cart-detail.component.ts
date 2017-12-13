import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { CartService } from './cart-service';
import { Product } from '../Product';

@Component({
  selector: 'cart-detail',
  template: `<table>
  <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Line Total</th>
  </tr>
  <tr *ngFor="let item of items">
  <td>{{item.product.name}}</td>
  <td>{{item.quantity}}</td>
  <td>{{item.product.price}}
  <td>{{item|itemTotal:item.quantity}}</td>
  <!--
  <tr *ngFor="let item of items|mapValues">
  <td>{{item['key'].name}}</td>
  <td>{{item['value']}}</td>
  <td>{{item['key'].price}}
  <td>{{item['key']|itemTotal:item['val']}}</td>
  </tr>
  -->
</table>`,
  styles: []
})
export class CartDetailComponent implements OnInit {
  items: CartItem[] = [];
  //items: Map<Product, number>;

  constructor(private cartService: CartService) { }

  // putIntoItems(product: Product, quan: number){
  //   this.items.push(new CartItem(product, quan));
  // }

  ngOnInit() {
    this.items = this.cartService.getCart().items;
  //   this.cartService.getCart().items.forEach((value, key)=>{
  //       this.putIntoItems(key, value);
  //   })
  //this.items = this.cartService.getCart().items;
  }

}
