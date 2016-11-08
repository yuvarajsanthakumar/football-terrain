import {Injectable, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../app.config";
import {Http} from "@angular/http";

@Injectable()
export class FootballService {
  constructor(private http: Http,  @Inject(APP_CONFIG) private config: AppConfig) {
  }

  getFixtures():string {
    //this.http.get(this.config.apiEndpoint).sub
    return this.config.apiEndpoint;
  }
}
