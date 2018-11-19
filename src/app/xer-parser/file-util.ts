import { Injectable }       from '@angular/core';
 
@Injectable()
export class FileUtil {
 
    constructor() {}
 
    isCSVFile(file) {
        return file.name.endsWith(".xer");
    }
 
    getHeaderArray(csvRecordsArr, tokenDelimeter) {        
        let headers = csvRecordsArr[0].split(tokenDelimeter);
        let headerArray = [];
        for (let j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    }

    parseXER(data){
        let curr_table ='';
        let result = {};
        let curr_headers = [];
        for( var i in data){
            let lineElements = (data[i].split('\t'));
            if (lineElements[0] =='%T'){
                
                curr_table = lineElements[1];
                result[curr_table] = [];
                
            } else if (lineElements[0] =='%F'){
                curr_headers = lineElements.slice(1,lineElements.length);
            } else {
                if (curr_table && curr_headers && lineElements[0]=='%R'){
                    let lineItem = {};
                    let curr_line = lineElements.slice(1, lineElements.length)
                    for (var j in curr_headers){
                        lineItem[curr_headers[j]] = curr_line[j];
                        // console.log(lineItem[curr_headers[j]] = curr_line[j]);
                    }
                    result[curr_table].push(lineItem);
                }
            }
        }
        return (result);
        
        
    }
 
    validateHeaders(origHeaders, fileHeaaders) {
        if (origHeaders.length != fileHeaaders.length) {
            return false;
        }
 
        var fileHeaderMatchFlag = true;
        for (let j = 0; j < origHeaders.length; j++) {
            if (origHeaders[j] != fileHeaaders[j]) {
                fileHeaderMatchFlag = false;
                break;
            }
        }
        return fileHeaderMatchFlag;
    }
 
    getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, 
        validateHeaderAndRecordLengthFlag, tokenDelimeter) {
        var dataArr = []
 
        for (let i = 0; i < csvRecordsArray.length; i++) {
            let data = csvRecordsArray[i].split(tokenDelimeter);
             
            if(validateHeaderAndRecordLengthFlag && data.length != headerLength){
                if(data==""){
                    alert("Extra blank line is present at line number "+i+", please remove it.");
                    return null;
                }else{
                    alert("Record at line number "+i+" contain "+data.length+" tokens, and is not matching with header length of :"+headerLength);
                    return null;
                }
            }
 
            let col = [];
            for (let j = 0; j < data.length; j++) {
                col.push(data[j]);
            }
            dataArr.push(col);
        }   
        return dataArr;
    }
 
}