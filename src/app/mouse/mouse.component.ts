import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-mouse',
    templateUrl:'./mouse.component.html',
    styleUrls:['./mouse.component.scss']
})
export class MouseComponent implements OnInit{
   public mouseName:string = 'HP Mouse'

   isMouseAvailable:boolean=true
  
    
   ngOnInit(): void {
       this.isMouseAvailable=Math.random()>.5 ? true : false
   }



}