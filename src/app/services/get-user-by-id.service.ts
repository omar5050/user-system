import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

HttpClient;
@Injectable({
  providedIn: 'root',
})
export class GetUserByIDService {
  constructor(private __http: HttpClient) {}

  getUserByID(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '64fc4a747b1786417e354f31',
    });

    return this.__http.get(`https://dummyapi.io/data/v1/user/${id}`, {
      headers,
    });
  }
}
