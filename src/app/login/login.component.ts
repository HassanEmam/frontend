import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { LoginResultModel } from '../login-result-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private  result: LoginResultModel;
  username:string;
  password:string;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  tryLogin(){
    this.apiService.login(this.username, this.password).subscribe(
      r => {
        this.result.token = r.token;
      });
  }
    
}
