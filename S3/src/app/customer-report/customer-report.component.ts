import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent {

  constructor(private customerServices:CustomerService){

  }

  customers:Customer[] = [];

  ngOnInit(): void{
    this.customers = this.customerServices.get()
  }

}
