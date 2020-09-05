import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../_Models/IEmployee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

AddEmployee(employee: IEmployee) {

    return this.http.post<IEmployee>(this.baseUrl + 'employees', employee );
}

changeMemberPhoto(photoUrl: string) {
  this.photoUrl.next(photoUrl);
}

UpdateEmployee(id: number,employee: IEmployee) {
  return this.http.put<IEmployee>(this.baseUrl + 'employees/' + id, employee);
}

GetEmployeeList() {
  return this.http.get<IEmployee[]>(this.baseUrl + 'employees/getall');
}

GetEmployee(id: number) {
  return this.http.get<IEmployee>(this.baseUrl + 'employees/' + id);
}

// setMainPhoto(empId: number, id: number) {
//   return this.http.post(this.baseUrl + 'users/' + empId + '/photos/' + id + '/setMain', {});
// }


//http://localhost:5000/employees/1/documets/test/1
LoadAllDocuments(empId: number)
{
  return this.http.get(this.baseUrl + 'employees/' + empId + '/documets/test/'+ empId);

}


//http://localhost:5000/employees/1/documets/main/1
LoadMain(empId: number)
{
  return this.http.get(this.baseUrl + 'employees/' + empId + '/documets/main/'+ empId);

}

//http://localhost:5000/employees/attendance
PunchIn(data:any)
{
  return this.http.post(this.baseUrl + 'employees/attendance',data);

}

}
