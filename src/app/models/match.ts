import {Result} from "./result";
export class Match {
  constructor(public matchId:number,
              public homeTeamName:string,
              public homeTeamUrl:string,
              public awayTeamName:string,
              public awayTeamUrl:string,
              public competitionUrl:string,
              public dateId:number,
              public date:Date,
              public result:Result,
              public status:string){}
}
