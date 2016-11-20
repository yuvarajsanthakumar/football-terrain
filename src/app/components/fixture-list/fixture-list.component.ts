import {Component, OnInit, Input} from '@angular/core';
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
export class FixtureListComponent implements OnInit {
  private matches:Match[];
  private fixturesId:number;
  private subscription:Subscription;
  constructor(private footballService:FootballService, private dateService:DateService,private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
    console.log("init of fixture-list.component");
    this.subscription = this.route.params.subscribe( (params:any) => this.fixturesId = params['fixtures-id']);
    if(this.fixturesId===undefined){
      console.log(this.footballService.fixtures);
      //this.router.navigate(['/fixtures',this.dateService.getNumberFromDate(this.footballService.fixtures.timeFrameStart)])
    }
  }

}
