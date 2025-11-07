import { Component, OnInit } from "@angular/core";






@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnInit{
    public productName:string='Samsung M1234'
    public productId:string='1243'
isProductAvailable: boolean = true;

   ngOnInit(): void {
       this.isProductAvailable=Math.random()>.5 ? true : false
   }
}