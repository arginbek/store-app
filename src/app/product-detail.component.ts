import { Component } from "@angular/core";
import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import {NgModel} from "@angular/forms";
import { Product } from "./Product";

@Component({
    selector: 'product-detail',
    template: `
        <ul *ngIf="product">
            <li [class.heading]="true">Product detail:</li>
            <li>name: {{product?.name}}</li>
            <li>price: {{product?.price}}</li>
            <li>description: {{product?.description}}</li>
        </ul>
        <div *ngIf="product">
            <input [(ngModel)]="product.name">
            <input [(ngModel)]="product.price">
            <input [(ngModel)]="product.description">
        </div>
        <button (click)="requestDelete()">delete</button>
    `,
    styles: ['ul .heading {font-weight: normal; list-style: none;}']
})

export class ProductDetailComponent {
    @Input()
    product: Product;

    @Output()
    deleteProduct = new EventEmitter<Product>();

    requestDelete() {
        this.deleteProduct.emit(this.product);
    }
}