import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ITableCustomerData, ICustomer } from 'src/app/_Models/ICustomer';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentCustomerComponent } from '../dialog-content-customer/dialog-content-customer.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit,AfterViewInit  {

  //table
  ELEMENT_DATA:ITableCustomerData[];
  displayedColumns: string[] = ['customerName', 'mobile', 'emailadd', 'description'];
  dataSource=new MatTableDataSource<ITableCustomerData>(this.ELEMENT_DATA);
 @ViewChild(MatPaginator) paginator: MatPaginator;
//table

myForm = new FormGroup({
  emp_id:new FormControl,

});

  constructor(private apiService:CustomerService,
    public dialog: MatDialog, private router:Router) { }



    ngAfterViewInit(): void {

      this.dataSource.paginator = this.paginator;
    }
    ngOnInit(): void {
     console.log(this.getEmployees());


    }

    getEmployees() {
      this.apiService.GetCustomerList().subscribe(response => {
        this.dataSource.data = response as ITableCustomerData[]
      }, error => {
        console.log(error);
      });
    }

    openDialog() {


this.dialog.open(DialogContentCustomerComponent,{
          width: '60%',
          height:'40%',
        // data:row
        }
        );


    }

    onRowClicked(row:ICustomer) {

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));

   // this.router.navigate(['/employees/'+row.id]);



    }
    applyFilter(filterValue:string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
      }

}
