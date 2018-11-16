import { Component, OnInit } from '@angular/core';
import { SubcontractorsService } from '../services/subcontractors.service'
@Component({
  selector: 'app-subcontractor-list',
  templateUrl: './subcontractor-list.component.html',
  styleUrls: ['./subcontractor-list.component.css']
})
export class SubcontractorListComponent implements OnInit {
  private  subcontractors:  Array<object> = [];

  constructor(private apiService:SubcontractorsService) { }

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
