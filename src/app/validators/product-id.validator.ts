import { AbstractControl, AsyncValidatorFn } from "@angular/forms";

export function productIdValidator(id: string): AsyncValidatorFn{
    return (control: AbstractControl) =>{
        const unique = id === control.value;
        return new Promise(resolve =>{
            setTimeout(()=>{
                if(unique){
                    resolve({"id": control.value});
                }else{
                    resolve(null);
                }
            }, 0)
        })
    }
}