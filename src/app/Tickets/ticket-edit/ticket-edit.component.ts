import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/Client/client.service';
import { CustomerService } from 'src/app/Customer/customer.service';
import { IClient } from 'src/app/_Models/IClient';
import { ICustomer } from 'src/app/_Models/ICustomer';
import { IRateCardofAticket, ITicket } from 'src/app/_Models/ITicket';
import { TicketDoc } from 'src/app/_Models/TicketDoc';
import { OpendialogforTicketTimeComponent, TicketTime } from '../opendialogfor-ticket-time/opendialogfor-ticket-time.component';

import { TicketService } from '../tickets/ticket.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  tktdocuments: TicketDoc[];
  //states: string[]=[];
  customer:ICustomer[];
  client:IClient[];
  ratecardofaticket:IRateCardofAticket[];

  myForm = new FormGroup({
    address:new FormControl,
    jobType:new FormControl,
    describtion:new FormControl,
    status:new FormControl,
    remarks:new FormControl,
    customerID:new FormControl,
    clientId:new FormControl,


  });


  id:number;
  ticket:ITicket;
  obj:TicketTime;
  constructor(public crudApi: TicketService,
    public toastr: ToastrService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private cusAPI:CustomerService,
    private clientAPI:ClientService
    ) { }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.ticket = data['tickets'];
     this.id=this.ticket.id;
    });

    this.getAllCustomer();
    this.getAllClient();
    this.getDocuments();
    this.getRatecardofAticket();

  }

getAllCustomer(){
this.cusAPI.GetCustomerList().subscribe(data=>{
this.customer = data as ICustomer[];

});

}

getAllClient(){
  this.clientAPI.GetClientList().subscribe(data=>{
    this.client = data as IClient[];
  });
}

getDocuments()
{

this.crudApi.LoadAllTicketDocuments(this.id).subscribe(data=>{

  this.tktdocuments=data as TicketDoc[];
});
}

getRatecardofAticket(){

  this.crudApi.getRateCardofaTicket(this.id).subscribe(
  (data)=>{

this.ratecardofaticket = data as IRateCardofAticket[];
  }
  );
}


  updateTicket(){

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ticket, null, 4));
  }


  openDialog(result): void {
    if (!(result=='Pending' || result=='Assigned')){
      const dialogRef = this.dialog.open(OpendialogforTicketTimeComponent, {
        width: '46%',
        data: this.obj
      });

      dialogRef.afterClosed().subscribe(recievedeData=> {
        this.obj = recievedeData;
         alert('ERROR!! :-)\n\n' + JSON.stringify(this.obj, null, 4));
        // this.valueChange.emit(this.qty);
      });

    }

  }

}
