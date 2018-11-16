import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcontractorsService {

  API_URL: string = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  public getSubcontractors(): Observable<any>{
    console.log('from companies services');
    return this.httpClient.get(this.API_URL + 'view_subcontractors', this.getAuthHeaders());
  }

  private getAuthHeaders() {
      const token = localStorage.getItem('token');
      const httpHeaders = new HttpHeaders(
        {'Content-Type': 'application/json; charset=utf-8',
        'x-access-token': token});
      return { headers: httpHeaders};
    }
}