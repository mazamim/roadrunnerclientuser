import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITicket } from 'src/app/_Models/ITicket';
import { OpendialogforTicketTimeComponent, TicketTime } from '../opendialogfor-ticket-time/opendialogfor-ticket-time.component';

import { TicketService } from '../tickets/ticket.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
  id:number;
  ticket:ITicket;
  obj:TicketTime;
  constructor(public crudApi: TicketService,
    public toastr: ToastrService,private route: ActivatedRoute, public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.id = (+this.route.snapshot.paramMap.get('id'));
    this.crudApi.GetTicketListbyID(this.id).subscribe(data=>{

     this.ticket=data;

    });

    console.log(this.ticket);
  }

  updateTicket(){}


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
