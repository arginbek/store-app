import {Component} from "@angular/core";
import {Product} from "./Product";
import {ProductService} from "./product.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

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

export class ProductListComponent implements OnInit {
    selectedProduct: Product;

    products: Product[];
    
    constructor(private productService: ProductService){};

    ngOnInit(){
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().subscribe(products => this.products = products);
    }

    delete(product: Product){
        this.products.splice(this.products.indexOf(product), 1);
    }
}