import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableandchart',
  templateUrl: './tableandchart.component.html',
  styleUrls: ['./tableandchart.component.scss']
})
export class TableandchartComponent implements OnInit {
  employees: Array<any>;
  totalRec : number;
  page: number = 1;
  chartdata:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
