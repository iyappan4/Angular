import { Component } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';
  customers:Customer[] = [];
  getCustomers(customers:Customer[]){
    this.customers = customers

  }
}
