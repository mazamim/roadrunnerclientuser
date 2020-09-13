import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-content-client',
  templateUrl: './dialog-content-client.component.html',
  styleUrls: ['./dialog-content-client.component.scss']
})
export class DialogContentClientComponent implements OnInit {
  public clientForm: FormGroup;
  constructor(private apiservice: ClientService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
    this.myForm();
  }

  myForm() {
    this.clientForm = this.fb.group({
      clientName: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      emailadd: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

    })
  }

  ResetForm() {
    this.clientForm.reset();
  }

  submitData() {
    this.apiservice.AddClient(this.clientForm.value).subscribe((data=>{
      this.toastr.success(data.clientName + ' successfully Added!');
      // this.crudApi.GetEmployeeList();
      // this.cusservice.refresh();
    }));



   }

}
