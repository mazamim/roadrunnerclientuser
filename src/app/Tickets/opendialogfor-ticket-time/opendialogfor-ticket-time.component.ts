import { Component, OnInit } from '@angular/core';
export interface TicketTime {
  ticketid:number;
  startTime:Date;
  endTime: Date;

}
@Component({
  selector: 'app-opendialogfor-ticket-time',
  templateUrl: './opendialogfor-ticket-time.component.html',
  styleUrls: ['./opendialogfor-ticket-time.component.scss']
})
export class OpendialogforTicketTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
