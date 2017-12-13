import { Injectable } from "@angular/core";
import { Cart } from "./cart";
import {Product} from "../Product";

@Injectable()
export class CartService {
    constructor(public cart: Cart){};

    getCart(){
        return this.cart;
    }

    addToCart(product: Product){
        //this.cart.addToMap(product);
        this.cart.add(product);
    }
}