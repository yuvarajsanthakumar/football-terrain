import { Injectable } from '@angular/core';
import {isNullOrUndefined} from "util";

@Injectable()
export class DateService {
  private weekday:string[] = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  constructor() { }

  public getNumberFromDate(date:Date):number{
    if(isNullOrUndefined(date)){
      throw new Error("date argument is required");
    }
    return Number(''+date.getFullYear()+(date.getMonth()+1)+date.getDate()+'');
  }

  public getDateFromNumber(inputNumber:number):Date{
    let date:Date = new Date();
    date.setDate(inputNumber%100);
    date.setMonth((Math.floor(inputNumber/100)%100)-1);
    date.setFullYear(Math.floor(inputNumber/10000));
    return date;
  }

  public getTodayAsNumber():number{
    let current = new Date();
    return this.getNumberFromDate(current);
  }

  public getTomorrowAsNumber():number{
    let current = new Date();
    current.setDate(current.getDate()+1);
    console.log(`tomorrow: ${current}`);
    return this.getNumberFromDate(current);
  }

  public getWeekDay(date:number) {
    return this.weekday[this.getDateFromNumber(date).getDay()];
  }
}
