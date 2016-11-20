import {Injectable, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../app.config";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Fixtures,Match,Result} from "../models";
import {BehaviorSubject} from "rxjs/Rx";
import {DateService} from "./date.service";

@Injectable()
export class FootballService {
  public fixtures:Fixtures;
  private _fixturesSource: BehaviorSubject<Fixtures> = new BehaviorSubject<Fixtures>(null);
  public fixtures$ = this._fixturesSource.asObservable();
  constructor(private http: Http, private dateService:DateService,  @Inject(APP_CONFIG) private config: AppConfig) {
  }

  loadFixtures() {
    const headers = new Headers({
      'X-Auth-Token': '8a4940261894452ba8bfc708d693266e'
    });
    this.http.get(this.config.apiEndpoint+'fixtures',{headers:headers})
      .map((response: Response) => response.json())
      .map((fixtures:any) =>
        new Fixtures(
        fixtures.fixtures.map((match:any) => {
          let selfUrl:Array<string> = match._links.self.href.split('fixtures/');
          let dateFromJson:Date = new Date(match.date.toString());
          let date:number = this.dateService.getNumberFromDate(dateFromJson);
          return new Match(Number(selfUrl[selfUrl.length-1]),match.homeTeamName,match._links.homeTeam.href,
            match.awayTeamName,match._links.awayTeam.href,match._links.competition.href,date,dateFromJson,
            new Result(match.result.goalsHomeTeam,match.result.goalsAwayTeam),match.status)
        })))
      .subscribe(
        fixtures => {
          this.fixtures = fixtures;
          this.notifyFixturesUpdate();
        });
  }

  private notifyFixturesUpdate() {
    this._fixturesSource.next(this.fixtures);

  }

  getFixtures():Fixtures{
    return this.fixtures;
  }
}
