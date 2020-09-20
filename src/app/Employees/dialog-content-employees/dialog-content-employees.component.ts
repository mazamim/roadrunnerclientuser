import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IEmployee, ITableData } from 'src/app/_Models/IEmployee';

@Component({
  selector: 'app-dialog-content-employees',
  templateUrl: './dialog-content-employees.component.html',
  styleUrls: ['./dialog-content-employees.component.scss']
})
export class DialogContentEmployeesComponent implements OnInit {
  public employeeForm: FormGroup;
  afterClosedData:ITableData[]=[];
  constructor(private empservice: EmployeeService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
    this.myForm();
  }

  myForm() {
    this.employeeForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      emailadd: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      position: ['']
    })
  }

  ResetForm() {
    this.employeeForm.reset();
  }

  submitEmployeeData() {
    this.empservice.AddEmployee(this.employeeForm.value).subscribe((data=>{
      this.toastr.success(data.employeeName + ' successfully Added!');

      this.afterClosedData.push(this.employeeForm.value);
      // this.crudApi.GetEmployeeList();
      // this.cusservice.refresh();
    }));



   }

}
