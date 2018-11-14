import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-subcontractor-list',
  templateUrl: './subcontractor-list.component.html',
  styleUrls: ['./subcontractor-list.component.css']
})
export class SubcontractorListComponent implements OnInit {
  private  subcontractors:  Array<object> = [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getSubcontractors()
  }

  public getSubcontractors(){
    this.apiService.getSubcontractors().subscribe((data:  Array<object>) => {
      this.subcontractors  =  data['subcontractors'];
      console.log(data);
  });
  }

}
