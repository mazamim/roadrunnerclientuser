export interface ICustomer {

  id: number;
  customerName: string;
  mobile: string;
  emailadd: string;
  description: string;
  created?:Date;
  updated?:Date;

}

export interface ITableCustomerData {
  id: number;
  customerName: string;
  mobile: string;
  emailadd: string;
  description: string;

}
