import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-laptop',
    templateUrl:'./laptop.component.html',
    styleUrls:['./laptop.component.scss']
})
export class LaptopComponent implements OnInit{
  public laptopName:string='HP Laptop'
 isLaptopAvailable:boolean=true

  ngOnInit(): void {
      this.isLaptopAvailable=Math.random()>.5 ? true : false
  }

}