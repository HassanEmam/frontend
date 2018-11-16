import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', userData);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'users', userData);
  }

}