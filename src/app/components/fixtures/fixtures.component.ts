import { Component, OnInit } from '@angular/core';
import {FootballService} from "../../services/football.service";

@Component({
  selector: 'ft-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  constructor(private footballService:FootballService) { }

  ngOnInit() {
    console.log(this.footballService.getFixtures());
  }

}
