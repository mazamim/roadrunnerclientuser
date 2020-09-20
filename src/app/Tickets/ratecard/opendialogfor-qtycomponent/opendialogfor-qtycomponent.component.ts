import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRateCardofAticket } from 'src/app/_Models/ITicket';
import { DialogData } from '../ratecard.component';

@Component({
  selector: 'app-opendialogfor-qtycomponent',
  templateUrl: './opendialogfor-qtycomponent.component.html',
  styleUrls: ['./opendialogfor-qtycomponent.component.scss']
})
export class OpendialogforQTYComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpendialogforQTYComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
