import {Component, OnInit, OnDestroy} from '@angular/core';
import {FootballService} from "../../services/football.service";
import {Fixtures} from "../../models";
import {Subscription} from "rxjs/Rx";
import {DateService} from "../../services/date.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ft-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit, OnDestroy{
  private fixtures:Fixtures = null;
  private subscription:Subscription;
  constructor(private footballService:FootballService, private dateService:DateService,private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    console.log("init of football.component");
    this.subscription = this.footballService.loadFixtures().
      subscribe(
        fixtures => {
          this.fixtures = fixtures;
        });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private fetchFixtures() {
    this.footballService.loadFixtures();
  }

}
