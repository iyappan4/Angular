import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { Output,EventEmitter } from '@angular/core';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {

  constructor(private customerService:CustomerService){

  }

  addCustomer(customer_name:string){
    this.customerService.add(customer_name);
  }

 



}
