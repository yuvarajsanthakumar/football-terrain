import { Component, OnInit } from '@angular/core';
import {FootballService} from "../../services/football.service";

@Component({
  selector: 'ft-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  constructor(private footballService:FootballService) {
    this.footballService.getFixtures();
    console.log(this.footballService.fixtures);
  }

  ngOnInit() {
    //console.log(this.footballService.getFixtures());
  }

}
