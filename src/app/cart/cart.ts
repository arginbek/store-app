import {CartItem} from './cart-item';
import {Product} from '../Product';

export class Cart {
    //items: Map<Product, number> = new Map();
    items: CartItem [] = [];
    total: number = 0;

    // addToMap(product: Product){
    //     let quan = this.items.get(product) | 0;
    //     this.items.set(product, ++quan);
    //     this.total++;
    // }

    add(product: Product){
        let found = false;
        this.items.forEach(item=>{
            if(item.product.id === product.id){
                found = true;
                item.quantity += 1;
                this.total++;
                return;
            }
        })

        if(!found){
            this.items.push(new CartItem(product, 1));
            this.total++;
        }
    }
}