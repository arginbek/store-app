import { Component } from "@angular/core";
import { Product } from "./Product";
import { ProductService } from "./product.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { NgForm } from "@angular/forms/src/directives/ng_form";

@Component({
    selector: 'product-list',
    template: `<div>
    <div>
        <cart (click)="toggleShowCart()"></cart>
        <cart-detail *ngIf="showCart"></cart-detail>
    </div>
    <div>
        <ul>
            <li *ngFor="let product of products; let i=index" (click)="selectedProduct = product">
                {{i+1}}: {{product.name}}
            </li>
        </ul>
    </div>
    <div>
        <product-detail [product] = "selectedProduct" 
        (deleteProduct) = "delete($event)">
        </product-detail>
    </div>
    <div>
        <form #form="ngForm" (ngSubmit)=submit(form)>
            <div class="form_grou">
                <label for="product_id">Product ID</label>
                <input required [validProductId]="'P123'" ngModel name="id" #productID="ngModel" id="product_id" type="text" class="form-control">
                <div class="alert alert-danger" *ngIf="productID.touched && !productID.valid">
                    <div *ngIf="productID.errors?.required">Product ID is required.</div>
                    <div *ngIf="productID.errors?.id">P123 is not a valid ID.</div>
                </div>
                <label for="product_name">Product Name</label>
                <input ngModel name="name" #productName="ngModel" id="product_name" type="text" class="form-control">
                <label for="product_price">Product Price</label>
                <input ngModel name="price" #productPrice="ngModel" id="product_price" type="text" class="form-control">
                <label for="description">Description</label>
                <textarea ngModel name="description" id="description" cols="30" rows="10" class="form-control"></textarea>
                <button>Submit</button>
            </div>
        </form>
    </div>
    </div>`
    ,
    styles: ['div {border: 1px solid green; text-align: left}'],
    providers:[ProductService]
})

export class ProductListComponent implements OnInit {
    selectedProduct: Product;
    // model: Product;

    products: Product[];

    showCart: boolean;


    constructor(private productService: ProductService) { };

    ngOnInit() {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().subscribe(products => this.products = products);
    }

    delete(product: Product) {
        this.products.splice(this.products.indexOf(product), 1);
    }

    toggleShowCart() {
        this.showCart = !this.showCart;
    }

    submit(form: NgForm){
        if(form.valid){
            this.productService.addProduct(form.value);
        }
    }
}