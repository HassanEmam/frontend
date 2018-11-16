import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginResultModel} from './login-result-model'
import { map } from 'rxjs/operators';
import { LoginResult } from './login-result';


@Injectable({
  providedIn: 'root'

})
export class ApiService {
  API_URL = 'http://127.0.0.1:5000/api';
  constructor(private httpClient:HttpClient) { }

  public getCompanies(){
    return this.httpClient.get(this.API_URL + '/view_companies');
  }

  public getSubcontractors(){
    return this.httpClient.get(this.API_URL + '/view_subcontractors');
  }

  login(username: string, password: string){
    console.log({username:username, password:password});
    return this.httpClient.post<any>(this.API_URL + '/login', {username: username,password: password})
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;}));
  }
}
