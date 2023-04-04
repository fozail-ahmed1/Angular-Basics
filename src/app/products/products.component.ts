import { Component } from "@angular/core";


@Component({
    selector:'products', //<products></products>
    templateUrl:'./products.component.html'
})

export class ProductsComponent{
    addProduct=true;
    addProductStus='No product added';
    constructor(){

        setTimeout(()=>{
            this.addProduct=false
        },4000)
    }

    onClick(){
        this.addProductStus='product added';
    }

    onUpdateProductName(event:any){
        console.log(event)
    }
}