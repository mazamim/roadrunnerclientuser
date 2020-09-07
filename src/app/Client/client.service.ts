import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../_Models/IClient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  AddClient(client: IClient) {

    return this.http.post<IClient>(this.baseUrl + 'client', client );
}

UpdateClient(id: number,client: IClient) {
  return this.http.put<IClient>(this.baseUrl + 'client/' + id, client);
}

GetClientList() {
  return this.http.get<IClient[]>(this.baseUrl + 'client/getall');
}

GetClient(id: number) {
  return this.http.get<IClient>(this.baseUrl + 'client/' + id);
}
}
