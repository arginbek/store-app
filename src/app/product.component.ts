import {Component} from "@angular/core";
import {Product} from "./Product";

@Component({
    selector: 'product-list',
    template:`<div>
        <ul>
            <li *ngFor="let product of products; let i=index" (click)="selectedProduct = product">
                {{i+1}}: {{product.name}}
            </li>
        </ul>
        <product-detail [product] = "selectedProduct" 
        (deleteProduct) = "delete($event)">
        </product-detail>
    </div>`
    ,
    styles: ['div {border: 1px solid green; text-align: left}']
})

export class ProductListComponent {
    products: Product[] = [new Product('iPhone', 1000, 'iPhone X'), 
    new Product('iPad',1000, 'latest'), new Product('AppleTV', 2000, 'Nice')];
    selectedProduct: Product;

    delete(product: Product){
        this.products.splice(this.products.indexOf(product), 1);
    }
}