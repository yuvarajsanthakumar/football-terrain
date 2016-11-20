import {Pipe, PipeTransform, OnInit} from '@angular/core';
import {log} from "util";
import {DateService} from "../services/date.service";

@Pipe({
  name: 'ftDate'
})
export class FtDatePipe implements PipeTransform  {
  private today:number;
  private tomorrow:number;
  constructor(private dateService:DateService){
    this.today = this.dateService.getTodayAsNumber();
    this.tomorrow = this.dateService.getTomorrowAsNumber();

  }
  transform(input:number, param?:any):any {
    let output:string;
    if (param === undefined) {
      output = (input % 100).toString();
    }
    else if (param == "weekday") {
      if (this.today === input) {

        output = "Today";
      }
      else if(this.tomorrow === input) {
        output = "Tom";
      }
      else{
        output = this.dateService.getWeekDay(input);
      }
    }

    return output;
  }

}
