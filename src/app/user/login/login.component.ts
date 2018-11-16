import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';
import { LoginResultModel } from '../../login-result-model';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]

})
export class LoginComponent implements OnInit {
  
  loading: boolean;
  username:string;
  password:string;
  userLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private apiService:ApiService, private router: Router, 
    private userService: UserService, private fb:FormBuilder, private global: GlobalService) { 
    this.userLogin = this.fb.group({
      username: ['', Validators.required] ,
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  OnLogin() {
    this.loading = true;
    console.log(this.userLogin.value);
    this.userService.loginUser(this.userLogin.value).subscribe(
      response => {
        console.log(response['token'])
        this.loading = false;
        localStorage.setItem('token', response['token']);
        this.global.me = response['user'];
        this.router.navigate(['/home']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}
