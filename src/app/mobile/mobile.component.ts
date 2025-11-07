import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-mobile',
    templateUrl:'./mobile.component.html',
    styleUrls:['./mobile.component.scss']
})

export class Mobilecomponent implements OnInit{
     public mobileName : string = 'OPPO A12'
     isMobileAvilable : boolean = true

    ngOnInit(): void {
        this.isMobileAvilable=Math.random()>.5 ? true : false
    }
}