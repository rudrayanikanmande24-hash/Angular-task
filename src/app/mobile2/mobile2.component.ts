import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-mobile2',
    templateUrl:'./mobile2.component.html',
    styleUrls:['./mobile2.component.scss']
})
export class Mobile2Component implements OnInit{
  public mobile2Name:string = 'Redmi'
  isMobile2Avialable:boolean=true

  ngOnInit(): void {
      this.isMobile2Avialable=Math.random() >.5 ? true : false
  }

}