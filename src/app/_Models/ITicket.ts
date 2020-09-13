import { IEmployeeForTicket } from './IEmployee';

export interface ITicket {

  id: number;
  jobType: string;
  address: string;
  describtion: string;
  status: string
  remarks: string;
  customerName:string;
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
