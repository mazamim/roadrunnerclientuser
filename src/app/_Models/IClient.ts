export interface IClient {

  id: number;
  clientName: string;
  mobile: string;
  emailadd: string;
  description: string;
  created?:Date;
  updated?:Date;

}

export interface ITableClientData {
  id: number;
  clientName: string;
  mobile: string;
  emailadd: string;
  description: string;

}
