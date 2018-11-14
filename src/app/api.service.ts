import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginResultModel} from './login-result-model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://127.0.0.1:5000/api';
  constructor(private httpClient:HttpClient) { }

  public getCompanies(){
    return this.httpClient.get(this.API_URL + '/companies');
  }

  public getSubcontractors(){
    return this.httpClient.get(this.API_URL + '/view_subcontractors');
  }

  login(username: string, password: string): Observable<LoginResultModel>{
    console.log(username, password);
    return this.httpClient.post<LoginResultModel>(this.API_URL + '/login', {
      username: username,
      password: password
    });
  }
}
