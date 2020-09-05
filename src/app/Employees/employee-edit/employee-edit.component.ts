import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from 'src/app/_Models/IEmployee';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDoc } from 'src/app/_Models/EmployeeDoc';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employee:IEmployee;
  empdocuments: EmployeeDoc[];
  empdocuments2: EmployeeDoc;
  id:number;
  photoUrl: string;
  @ViewChild('editForm',{static:true}) editForm: NgForm;
  constructor(public crudApi: EmployeeService,
    public toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = (+this.route.snapshot.paramMap.get('id'));
    this.crudApi.GetEmployee(this.id).subscribe(data=>{

     this.employee=data;

    });

    this.getDocuments();
   // this.crudApi.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
   this.updateMainPhoto();

  }
  updateEmployee()
  {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employee, null, 4));
    this.crudApi.UpdateEmployee(this.id, this.employee).subscribe(next => {

      this.toastr.success('successfully updated!');
      this.editForm.reset(this.employee);
    }, error => {
      console.log('error');
    });

  }

  getDocuments()
{

this.crudApi.LoadAllDocuments(this.id).subscribe(data=>{

  this.empdocuments=data as EmployeeDoc[];
});
}

updateMainPhoto() {
  this.crudApi.LoadMain(this.id).subscribe(data=>{

    this.empdocuments2=data as EmployeeDoc;
    this.photoUrl=this.empdocuments2.url;
  });
}

}
