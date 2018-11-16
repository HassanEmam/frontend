import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CompaniesService } from '../services/companies.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  private  companies:  Array<object> = [];
  constructor(private  apiService:  CompaniesService) { }
  ngOnInit() {
      this.getCompanies();
  }
  public  getCompanies(){
      this.apiService.getCompanies().subscribe((data:  Array<object>) => {
          this.companies  =  data['companies'];
          console.log(data);
      });
  }
}
