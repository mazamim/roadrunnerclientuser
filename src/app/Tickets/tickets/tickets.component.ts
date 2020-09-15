import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketService } from './ticket.service';
import { ITicket } from 'src/app/_Models/ITicket';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogContentCustomerComponent } from 'src/app/Customer/dialog-content-customer/dialog-content-customer.component';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  myForm = new FormGroup({
    emp_id:new FormControl,

  });


   //table
   ELEMENT_DATA:ITicket[];
   displayedColumns: string[] = ['customerName','jobType', 'address', 'describtion', 'status'];
   //dataSource=new MatTableDataSource<ITicket>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
 // dataSource=new MatTableDataSource<ITicket>(this.ELEMENT_DATA);
  constructor(private api:TicketService, public dialog: MatDialog, private router:Router) { }

  ngAfterViewInit(): void {
    this.dataSource=new MatTableDataSource<ITicket>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

    this.getAllTicket()

  }

  getAllTicket(){

    this.api.GetTicketList().subscribe(response => {
      this.dataSource.data = response as ITicket[]
    }, error => {
      console.log(error);
    });
  }

  onRowClicked(row:ITicket) {

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));

 this.router.navigate(['/tickets/'+row.id]);

          }






applyFilter(filterValue:string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
