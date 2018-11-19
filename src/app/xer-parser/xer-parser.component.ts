import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FileUtil } from './file-util';
import { Constants } from './xer-constants';
import { parse } from "url";
import { GlobalService } from "../services/global.service";
import { XerService } from "../services/xer.service";

@Component({
  selector: 'app-xer-parser',
  templateUrl: './xer-parser.component.html',
  styleUrls: ['./xer-parser.component.css']
})
export class XerParserComponent implements OnInit {

  @ViewChild('fileImportInput')
  fileImportInput: any;
  loading:boolean = false;
  csvRecords = [];
 
  constructor(private _router: Router,
    private _fileUtil: FileUtil, private router: Router, 
    private xerService: XerService, private global: GlobalService
  ) { }
 
  ngOnInit() { }
 
  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {
 
    var text = [];
    var files = $event.srcElement.files;
    var input = $event.target;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = (data) => {
      let xerData = reader.result;
      let v1 = performance.now()
      let xerRecordsArray = (<string>xerData).split(/\r\n|\n/);
      let programme = this._fileUtil.parseXER(xerRecordsArray);     
      let v2 = performance.now();
      console.log("Call to parse xer took " + (v2 - v1) + " milliseconds.")
      Object.keys(programme).forEach(element => {
        console.log(element);
      });
      let tasks_to_add = (<Array<string>>programme['TASK']).slice(0,3);
      this.addTasks(tasks_to_add);
      }    
  }
  
  addTasks(tasks) {
    this.loading = true;
    console.log(tasks);
    this.xerService.add_tasks(tasks).subscribe(
      response => {
        this.loading = false;
        console.log(response);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}
