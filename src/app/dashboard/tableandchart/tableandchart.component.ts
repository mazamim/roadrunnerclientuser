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
  chartdata:any[]=[
{ "name": "Assigned",
  "value" : 100
},
{ "name": "Pending",
  "value" : 200
}
,
{ "name": "C_not_Closed",
  "value" : 20
}
,
{ "name": "C_not_Invoiced",
  "value" : 80
}
,
{ "name": "C_Invoice_Updated",
  "value" : 30
}


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
