import { Component } from "@angular/core";

@Component({
    selector:'app-friut2',
    templateUrl:'./fruit2.component.html',
    styleUrls:['./fruit2.component.scss']
})
export class fruit2Component{
   fruits:Array<string>=["apple", "banana", "mango", "orange"]
}