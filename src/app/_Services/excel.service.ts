import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';
import { BulkTicket} from '../Tickets/add-bulk-tickets/add-bulk-tickets.component';
import { BulkRatecard } from '../_Models/BulkRatecard';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
    /* read workbook */
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    const data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));

    return data;
  }

  AddbulkTickets(ticket: BulkTicket[]) {

    return this.http.post<BulkTicket>(this.baseUrl + 'ticket', ticket );
}


AddbulkRatecard(ratecard: BulkRatecard[])
{
  return this.http.post<BulkRatecard>(this.baseUrl + 'ratecard', ratecard );

}
}
