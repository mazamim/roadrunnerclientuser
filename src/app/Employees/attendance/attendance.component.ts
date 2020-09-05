import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITableAttendance } from 'src/app/_Models/IAttendance';
import { IEmployee } from 'src/app/_Models/IEmployee';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  ELEMENT_DATA:ITableAttendance[];
  displayedColumns: string[] = ['empname', 'punchin', 'punchout', 'duration','earn'];
 dataSource=new MatTableDataSource<ITableAttendance>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  rowData : any;
  show: boolean = false;
  employee:IEmployee[];
  obj:any={

      "emp_id":"all",
      "startIn": "2020-07-20 06:39:51",
      "endIn": "2020-07-21 07:40:14"

  };
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {

    // this.api.GetEmployeeList().subscribe(data=>{
    // this.employees=data;
    // })

//  this.getAllData();
//  this.dataSource.paginator = this.paginator;

 }

//  public getAllData(){

//    this.api.getAttendanceslistbydate(this.obj).subscribe(data=>{
//    this.dataSource.data = data as ITableData[]

//     });
//  }

 onRowClicked(row) {

   alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));
}



onSubmit(){
  const punchD = moment(this.myForm.controls['punchIn'].value).format('YYYY/MM/DD');
  const punchT=  moment(this.myForm.controls['punchtime'].value).format('HH:mm:ss');

   this.myForm.patchValue({
    EmployeeId:1,
    punchIn: punchD +" " + punchT
   })

   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
   this.empservice.PunchIn(this.myForm.value).subscribe(()=>
   {
    alert('SUCCESS!!');

   });

 }

 myForm = new FormGroup({
  EmployeeId:new FormControl,
   punchIn: new FormControl(new Date()),
   punchtime: new FormControl(new Date())

 });


 myForm2 = new FormGroup({
  EmployeeId:new FormControl,
   punchOut: new FormControl(new Date())

 });

applyFilter(filterValue:string){
 this.dataSource.filter = filterValue.trim().toLowerCase();
 }

}
