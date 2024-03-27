import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteUserService {
  constructor(private __http: HttpClient) {}

  deleteUserByID(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '64fc4a747b1786417e354f31',
    });
    return this.__http.delete(`https://dummyapi.io/data/v1/user/${id}`, {
      headers,
    });
  }
}
