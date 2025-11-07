import { Component } from "@angular/core";

@Component({
    selector:'app-subject',
    templateUrl:'./subject.component.html',
    styleUrls:['./subject.component.scss']
})
export class SubjectComponent{
 subjects : Array<string> = ["Math", "Science", "English", "History", "Geography"]

}