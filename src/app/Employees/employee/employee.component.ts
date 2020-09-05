import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterEvent } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IEmployee, ITableData } from 'src/app/_Models/IEmployee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentEmployeesComponent } from '../dialog-content-employees/dialog-content-employees.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit,AfterViewInit  {

  //table
  ELEMENT_DATA:ITableData[];
  displayedColumns: string[] = ['employeeName', 'position', 'mobile', 'emailadd'];
  dataSource=new MatTableDataSource<ITableData>(this.ELEMENT_DATA);
 @ViewChild(MatPaginator) paginator: MatPaginator;
//table


myForm = new FormGroup({
  emp_id:new FormControl,

});

  constructor(private EmpService:EmployeeService,
    public dialog: MatDialog, private router:Router) { }



    ngAfterViewInit(): void {

      this.dataSource.paginator = this.paginator;
    }
    ngOnInit(): void {
     console.log(this.getEmployees());


    }

    getEmployees() {
      this.EmpService.GetEmployeeList().subscribe(response => {
        this.dataSource.data = response as ITableData[]
      }, error => {
        console.log(error);
      });
    }

    openDialog() {


this.dialog.open(DialogContentEmployeesComponent,{
          width: '60%',
          height:'40%',
        // data:row
        }
        );


    }

    onRowClicked(row:IEmployee) {

     //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));

    this.router.navigate(['/employees/'+row.id]);



    }
    applyFilter(filterValue:string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
      }

  }



















