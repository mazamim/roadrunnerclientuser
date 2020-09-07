import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-content-customer',
  templateUrl: './dialog-content-customer.component.html',
  styleUrls: ['./dialog-content-customer.component.scss']
})
export class DialogContentCustomerComponent implements OnInit {

  public customerForm: FormGroup;
  constructor(private apiservice: CustomerService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
    this.myForm();
  }

  myForm() {
    this.customerForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      emailadd: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

    })
  }

  ResetForm() {
    this.customerForm.reset();
  }

  submitData() {
    this.apiservice.AddCustomer(this.customerForm.value).subscribe((data=>{
      this.toastr.success(data.customerName + ' successfully Added!');
      // this.crudApi.GetEmployeeList();
      // this.cusservice.refresh();
    }));



   }

}
