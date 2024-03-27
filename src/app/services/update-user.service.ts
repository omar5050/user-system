import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUser } from '../interface/update-user';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  constructor(private __http: HttpClient) {}

  updateUser(id: string, data: UpdateUser): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '64fc4a747b1786417e354f31',
    });
    return this.__http.put(`https://dummyapi.io/data/v1/user/${id}`, data, {
      headers,
    });
  }
}
