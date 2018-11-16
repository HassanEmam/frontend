import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';
import { LoginResultModel } from '../../login-result-model';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private  result: LoginResultModel;
  username:string;
  password:string;
  userLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private apiService:ApiService, private fb:FormBuilder) { 
    this.userLogin = this.fb.group({
      username: ['', Validators.required] ,
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  OnLogin(){
    console.log("Hassan Emam");
    console.log(this.userLogin.value);
  }
    
}
