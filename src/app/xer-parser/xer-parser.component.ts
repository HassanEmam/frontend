import { Component, OnInit, ViewChild } from "@angular/core";
import { Router }                       from "@angular/router";
import { FileUtil }                     from './file-util';
import { Constants }                    from './xer-constants';
import { parse } from "url";

@Component({
  selector: 'app-xer-parser',
  templateUrl: './xer-parser.component.html',
  styleUrls: ['./xer-parser.component.css']
})
export class XerParserComponent implements OnInit {

  @ViewChild('fileImportInput')
  fileImportInput: any;
 
  csvRecords = [];
 
  constructor(private _router: Router,
    private _fileUtil: FileUtil
  ) { }
 
  ngOnInit() { }
 
  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {
 
    var text = [];
    var files = $event.srcElement.files;
    
 
    var input = $event.target;
    console.log(input.files[0].name);
    var reader = new FileReader();
    reader.readAsText(input.files[0]);
 
    reader.onload = (data) => {
      let xerData = reader.result;
      let csvRecordsArray = (<string>xerData).split(/\r\n|\n/);
      this._fileUtil.parseXER(csvRecordsArray);     
      
      }    
  } 
}
