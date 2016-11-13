import { Component, OnInit } from '@angular/core';
import {FootballService} from "../../services/football.service";
import {Fixtures} from "../../models";

@Component({
  selector: 'ft-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  private fixtures:Fixtures = null;
  constructor(private footballService:FootballService) {}

  ngOnInit() {
    this.getFixtures();
  }

  private getFixtures(){
      this.footballService.getFixtures().subscribe(
        fixtures => {
          this.fixtures = fixtures;
          console.log(this.fixtures);
              })
      }

}
