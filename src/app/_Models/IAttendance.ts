export interface IAttendance {
  id: number;
  emp_id: number;
  punchIn?:Date;
  punchOut?:Date;
}

export interface IAllPunchinList {
  id: number;
  emp_id: number;
  punchIn?:Date;
  punchOut?:Date;
  created_at?:Date;
  updated_at?:Date;
}

export interface ITableAttendance {
  id:number;
  emp_id:number;
  punchIn: Date;
  punchOut: Date;
  created_at: Date;
  updated_at: Date;
  emp_name:string;
  timediff: string;
  timediffminutes: number;
  earned: number;

}
