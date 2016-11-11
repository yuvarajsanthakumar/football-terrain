import {Injectable, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../app.config";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class FootballService {
  public fixtures:any[];
  constructor(private http: Http,  @Inject(APP_CONFIG) private config: AppConfig) {
  }

  getFixtures() {
    //this.http.get(this.config.apiEndpoint).sub
    const headers = new Headers({
      'X-Auth-Token': '8a4940261894452ba8bfc708d693266e'
    });
    // return this.http.get(this.config.apiEndpoint+'fixtures',{headers:headers})
    //   .map((response: Response) => response.json())
    //   .subscribe(
    //     (data) => {
    //       this.fixtures = data;
    //     }
    //   );
return null;
  }
}
