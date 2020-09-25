import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IEmployeeForTicket } from 'src/app/_Models/IEmployee';
import { ITicket, IByTicketID, IRateCardofAticket } from 'src/app/_Models/ITicket';
import { BulkRatecard } from 'src/app/_Models/BulkRatecard';

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

  //http://localhost:5000/ticket/106/documets/all/106
LoadAllTicketDocuments(tktId: number)
{
  return this.http.get(this.baseUrl + 'ticket/' + tktId + '/documets/all/'+ tktId);

}

//http://localhost:5000/ratecard/getall
getAllRateCard(){
  return this.http.get<BulkRatecard[]>(this.baseUrl + 'ratecard/getall');
}

//http://localhost:5000/ratecard/ratesbyticket/1

getRateCardofaTicket(tkt:number){
  return this.http.get<IRateCardofAticket[]>(this.baseUrl + 'ratecard/ratesbyticket/'+tkt);
}

//http://localhost:5000/ratecard/updaterates/1
addRateCardofaTicket(ratecardofatkt:IRateCardofAticket[],tkt:number)
{
  return this.http.post<IRateCardofAticket>(this.baseUrl + 'ratecard/updaterates/'+tkt,ratecardofatkt);

}

//http://localhost:5000/ticket/1

updateTicket(tkt:ITicket)
{
  return this.http.put<ITicket>(this.baseUrl + 'ticket/'+tkt.id,tkt);

}

}
