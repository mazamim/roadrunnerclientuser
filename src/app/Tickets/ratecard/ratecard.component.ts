import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { BulkRatecard } from 'src/app/_Models/BulkRatecard';
import { IRateCardofAticket } from 'src/app/_Models/ITicket';
import { TicketService } from '../tickets/ticket.service';
import { OpendialogforQTYComponentComponent } from './opendialogfor-qtycomponent/opendialogfor-qtycomponent.component';


export interface DialogData {
  rateid:number;
  sor: string;
  rate:number;
  qty:number;
}

@Component({
  selector: 'app-ratecard',
  templateUrl: './ratecard.component.html',
  styleUrls: ['./ratecard.component.scss']
})
export class RatecardComponent implements OnInit {
  ELEMENT_DATA:BulkRatecard[];
  displayedColumns: string[] = ['category', 'sor', 'description', 'uom','rate','clientid'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input() fromParentratecardofaticket: IRateCardofAticket[];
  @Input() tktid: number;

  constructor(private api:TicketService,public dialog: MatDialog,private toaster:ToastrService) { }

  ngOnInit(): void {

this.dataSource=new MatTableDataSource<BulkRatecard>(this.ELEMENT_DATA);
this.getAllData();
this.dataSource.paginator = this.paginator;

  }

  public getAllData(){

    this.api.getAllRateCard().subscribe(data=>{
    this.dataSource.data = data as BulkRatecard[]

     });
  }

  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date())



  });

  onSumbit(){}


applyFilter(filterValue:string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removefromlist(event){

 const arr= this.fromParentratecardofaticket.filter(obj=>{
 return event.rateCardID!==obj.rateCardID

    });

    this.fromParentratecardofaticket=arr;

  }

  updateRates()
  {
      this.api.addRateCardofaTicket(this.fromParentratecardofaticket,this.tktid).subscribe(()=>
      {
        this.toaster.success("Successfully Updated");
      }
      ,
      error=>{
        this.toaster.error("Error Occured While Updating");
      }

      );

  }


  openDialog(row) {

    const dialogRef = this.dialog.open(OpendialogforQTYComponentComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
     const data = result;
 // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
      this.fromParentratecardofaticket.push(
        {
          ticketId : this.tktid,
          rateCardID:data.id,
          rateCardName:data.sor,
          rate:data.rate,
          qty:data.qty
        }
      );
    });
}

}
