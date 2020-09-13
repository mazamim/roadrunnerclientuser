import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITableClientData, IClient } from 'src/app/_Models/IClient';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../client.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentCustomerComponent } from 'src/app/Customer/dialog-content-customer/dialog-content-customer.component';
import { DialogContentClientComponent } from '../dialog-content-client/dialog-content-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    //table
    ELEMENT_DATA:ITableClientData[];
    displayedColumns: string[] = ['clientName', 'mobile', 'emailadd', 'description'];
    dataSource=new MatTableDataSource<ITableClientData>(this.ELEMENT_DATA);
   @ViewChild(MatPaginator) paginator: MatPaginator;
  //table

  myForm = new FormGroup({
    emp_id:new FormControl,

  });

    constructor(private apiService:ClientService,
      public dialog: MatDialog, private router:Router) { }



      ngAfterViewInit(): void {

        this.dataSource.paginator = this.paginator;
      }
      ngOnInit(): void {
      // console.log(this.getEmployees());
this.getClient();

      }

      getClient() {
        this.apiService.GetClientList().subscribe(response => {
          this.dataSource.data = response as ITableClientData[]
        }, error => {
          console.log(error);
        });
      }

      openDialog() {


  this.dialog.open(DialogContentClientComponent,{
            width: '60%',
            height:'40%',
          // data:row
          }
          );


      }

      onRowClicked(row:IClient) {

          alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));

     // this.router.navigate(['/employees/'+row.id]);



      }
      applyFilter(filterValue:string){
        this.dataSource.filter = filterValue.trim().toLowerCase();
        }

}
