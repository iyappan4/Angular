import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isDisabled:boolean = true;
  // searchValue:String = "Something";

  name:String = "iyappan"

  changeName(){
    this.name = "Arun"
  }
  changeInput(event:Event){
    this.name = (<HTMLInputElement>event.target).value
  }
}
