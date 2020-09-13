import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IEmployeeForTicket } from 'src/app/_Models/IEmployee';
import { ITicket, IByTicketID } from 'src/app/_Models/ITicket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //http://localhost:5000/ticket/getall
  GetTicketList() {
    return this.http.get<ITicket[]>(this.baseUrl + 'ticket/getall');
  }

  GetTicketListbyID(id: number) {
    return this.http.get<ITicket>(this.baseUrl + 'ticket/'+id);
  }


  //http://localhost:5000/ticket/emp/1(ticketid)
  GetListByTicketID(id: number)
  {
    return this.http.get<IByTicketID[]>(this.baseUrl + 'ticket/emp'+id);

  }

}
