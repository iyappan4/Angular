import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {

  customers:Customer[] = [];

  constructor(private customerService:CustomerService){

  }

  ngOnInit(): void{
    this.customers = this.customerService.get()
  }

  

}
