import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Match} from "../../models";
import {FootballService} from "../../services/football.service";
import {DateService} from "../../services/date.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'ft-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit, OnDestroy {
  private matches:Match[] = [];
  private fixturesId:number;
  private subscription:Subscription;
  private routeSubscription:Subscription;
  constructor(private footballService:FootballService, private dateService:DateService,private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
    console.log("init of fixture-list.component");
    this.routeSubscription = this.route.params.subscribe(
      (params:any) => {
        this.fixturesId = params['fixtures-id'];

        if(this.fixturesId===undefined){
          this.subscription = this.footballService.loadFixtures().subscribe(
            fixtures => {
              let dates = fixtures.dateList;
              console.log('redirecting....');
              this.router.navigate(['/fixtures', dates[0]]);
            }
          );
          //this.router.navigate(['/fixtures',this.dateService.getNumberFromDate(this.footballService.fixtures.timeFrameStart)])
        }
        else{
          this.matches = [];
          this.subscription = this.footballService.loadFixtures()
            .mergeMap(fixtures => fixtures.matches)
            .filter(match => match.dateId==this.fixturesId)
            .subscribe(
              match => this.matches.push(match)
            );
        }


      }
    );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
