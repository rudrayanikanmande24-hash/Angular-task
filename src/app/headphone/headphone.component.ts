import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-headphone',
    templateUrl:'./headphone.component.html',
    styleUrls:['./headphone.component.scss']
})
export class HeadphoneComponent implements OnInit{
   public headphoneName:string='ZEB-Deuke'

   isHeadphoneAvailabe : boolean = true

   ngOnInit(): void {
       this.isHeadphoneAvailabe=Math.random()>.5 ? true : false
   }
}