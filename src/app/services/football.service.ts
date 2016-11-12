import {Injectable, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../app.config";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Fixtures,Match,Result} from "../models";

@Injectable()
export class FootballService {
  public fixtures:Fixtures;
  constructor(private http: Http,  @Inject(APP_CONFIG) private config: AppConfig) {
  }

  getFixtures() {
    const headers = new Headers({
      'X-Auth-Token': '8a4940261894452ba8bfc708d693266e'
    });
    return this.http.get(this.config.apiEndpoint+'fixtures',{headers:headers})
      .map((response: Response) => response.json())
      .map((fixtures:any) =>
        new Fixtures(new Date(fixtures.timeFrameStart+''),new Date(fixtures.timeFrameEnd+''),
        fixtures.fixtures.map((match:any) => {
          let selfUrl:Array<string> = match._links.self.href.split('fixtures/');
          return new Match(Number(selfUrl[selfUrl.length-1]),match.homeTeamName,match._links.homeTeam.href,
            match.awayTeamName,match._links.awayTeam.href,match._links.competition,new Date(match.date),
            new Result(match.result.goalsHomeTeam,match.result.goalsAwayTeam),match.status)
        })))
  }
}
