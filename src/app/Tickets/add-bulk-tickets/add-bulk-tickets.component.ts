import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/_Services/excel.service';
import { RefreshService } from 'src/app/_Services/refresh.service';

export class BulkTicket {
  jobType: string = "";
  address: string = "";
  describtion: string = "";
  status: string = "";
  remarks: string = "";
  CustomerId : string = "";
  ClientId : string = "";
}

@Component({
  selector: 'app-add-bulk-tickets',
  templateUrl: './add-bulk-tickets.component.html',
  styleUrls: ['./add-bulk-tickets.component.scss']
})
export class AddBulkTicketsComponent implements OnInit {
  importTicket: BulkTicket[] = [];
  constructor(private excelSrv: ExcelService,
    public toastr: ToastrService,private ref:RefreshService) { }

  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);

      const header: string[] = Object.getOwnPropertyNames(new BulkTicket());
      const importedData = data.slice(1, -1);

      this.importTicket = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <BulkTicket>obj;
      })

    };
    reader.readAsBinaryString(target.files[0]);

  }
  onSumbit(){
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.importContacts, null, 4));

     this.excelSrv.AddbulkTickets(this.importTicket).subscribe(data=>{
       this.toastr.success(' successfully Added!');
       this.ref.refresh();
     }, error=>{alert('ERROR!! :-)\n\n' + JSON.stringify(error.message, null, 4))});
   }

}
