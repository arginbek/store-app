import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Product} from './Product';
import {PRODUCTS} from './mock-products';

export class ProductService {

    getProducts(): Observable<Product[]>{
        return of(PRODUCTS);
    }
}