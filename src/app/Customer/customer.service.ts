import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../_Models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  AddCustomer(customer: ICustomer) {

    return this.http.post<ICustomer>(this.baseUrl + 'customer', customer );
}

UpdateCustomer(id: number,customer: ICustomer) {
  return this.http.put<ICustomer>(this.baseUrl + 'customer/' + id, customer);
}

GetCustomerList() {
  return this.http.get<ICustomer[]>(this.baseUrl + 'customer/getall');
}

GetCustomer(id: number) {
  return this.http.get<ICustomer>(this.baseUrl + 'customer/' + id);
}


}
