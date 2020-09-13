import { EmployeeDoc } from './EmployeeDoc';

export interface IEmployee {

  id: number;
  employeeName: string;
  lastname: string;
  position: string;
  mobile: string
  emailadd: string;
  description?:string;
  skills?:string;
  address?:string;
  salarytype?:string;
  salary?:number;
  payment_mode?:string;
  bankdetails?:string;
  created_at?:Date;
  documents?: EmployeeDoc[];
}

export interface ITableData {
  id:number;
  employeeName:string;
  position: string;
  mobile: string
  emailadd: string;

}

export interface IEmployeeForTicket {
  id:number;
  employeeName:string;
}
