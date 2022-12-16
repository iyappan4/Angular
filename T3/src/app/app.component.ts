import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String = "iyappan";
  age:number = 20;

  getCity(){
    return 'chennai';
  }
}
