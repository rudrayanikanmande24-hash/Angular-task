import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-fruit',
    templateUrl:'./fruit.component.html',
    styleUrls:['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
   public fruitName : string = 'Apple'
   isFruitAvailable:boolean=true

   ngOnInit(): void {
       this.isFruitAvailable=Math.random()>.5 ? true : false
   }
}