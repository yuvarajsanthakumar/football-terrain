import {Component, OnInit, OnDestroy} from '@angular/core';
import {FootballService} from "../../services/football.service";
import {Fixtures} from "../../models";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'ft-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit, OnDestroy{
  private fixtures:Fixtures = null;
  private subscription:Subscription;
  constructor(private footballService:FootballService) {}

  ngOnInit() {
    this.subscription = this.footballService.fixtures$.subscribe(fixtures => this.fixtures = fixtures);
    this.fetchFixtures();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private fetchFixtures() {
    this.footballService.loadFixtures();
  }

}
