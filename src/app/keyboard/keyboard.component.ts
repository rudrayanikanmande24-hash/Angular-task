import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-keyboard',
    templateUrl:'./keyboard.component.html',
    styleUrls:['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit{
 public keyboardName: string = 'HP keyboard'

 isKeyBaordAvailable : boolean = true

 ngOnInit(): void {
     this.isKeyBaordAvailable=Math.random() > .5 ? true : false
 }
}