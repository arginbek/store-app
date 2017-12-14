import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS, AsyncValidator} from "@angular/forms";
import {productIdValidator} from "./product-id.validator";
import { Observable } from 'rxjs/Observable';

@Directive({
    selector: '[validProductId]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ProductIdValidatorDirective, multi: true}]
})
export class ProductIdValidatorDirective implements AsyncValidator {
    @Input() validProductId: string;

    validate(control: AbstractControl): Promise<{[key: string]: any;} | null> | Observable<{[key: string]: any;} | null> {
        return this.validProductId ? productIdValidator(this.validProductId)(control)
            : null;
    }
}