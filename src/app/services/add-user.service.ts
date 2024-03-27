import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser } from '../interface/add-user';
import { Observable } from 'rxjs';
HttpClient;
@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  constructor(private __http: HttpClient) {}

  addUser(data: AddUser): Observable<AddUser> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '64fc4a747b1786417e354f31',
    });

    const options = { headers };
    return this.__http.post<AddUser>(
      'https://dummyapi.io/data/v1/user/create',
      data,
      options
    );
  }
}
