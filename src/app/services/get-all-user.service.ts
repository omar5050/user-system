import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUser } from '../interface/all-user';

@Injectable({
  providedIn: 'root',
})
export class GetAllUserService {
  constructor(private __htttp: HttpClient) {}

  getAllUser(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '64fc4a747b1786417e354f31',
    });

    const option = { headers };
    return this.__htttp.get<any>(
      `https://dummyapi.io/data/v1/user?limit=5&page=${page.toString()}`,
      option
    );
  }
}
