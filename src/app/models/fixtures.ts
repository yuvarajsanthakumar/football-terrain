import {Match} from "./match";
export class Fixtures {
  public timeFrameStart:Date;
  public timeFrameEnd:Date;
  public dateList:number[] = [];
  constructor(public matches:Array<Match>){
    this.timeFrameStart = matches[0].date;
    this.timeFrameEnd = matches[matches.length-1].date;
    this.generateDateList();
  }

  generateDateList():void {
    for(let match of this.matches)
    {
      if(this.dateList.indexOf(match.dateId)<0){
        this.dateList.push(match.dateId);
      }

    }
  }

  addDays(date, days):Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
