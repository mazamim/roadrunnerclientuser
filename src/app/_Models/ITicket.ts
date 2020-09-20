import { IEmployeeForTicket } from './IEmployee';

export interface ITicket {

  id: number;
  jobType: string;
  address: string;
  describtion: string;
  status: string
  remarks: string;
  customerId:number;
  customerName:string;
  clientId:number;
  clientName:string;
  employee?:IEmployeeForTicket[];
  created?:Date;
  updated?:Date;
}

export interface IJobType {

  id: number;
  jobType: string;
  describtion?: string;
  measurement?: string;
  unitPrice?: string
  created_at?:Date;
  updated_at?:Date;

}

export interface ICount {
  name: string;
  value: number;
}

export interface IByTicketID {
  id: number;
  employeeId:number;
  employee: string;
  ticketId: number;
  address: string;
}
export interface IRateCardofAticket {
  id?: number;
  ticketId: number;
  rateCardID:number;
  rateCardName:string;
  rate:number;
  qty:number;

}
