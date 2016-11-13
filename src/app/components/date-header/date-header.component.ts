import {Component, OnInit, Input} from '@angular/core';
import {FootballService} from "../../services/football.service";

@Component({
  selector: 'ft-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.css']
})
export class DateHeaderComponent implements OnInit {

  @Input() public from:Date;
  @Input() public to:Date;
  public dates:number[];
  constructor(public service:FootballService) { }

  ngOnInit() {
    this.dates = this.service.fixtures.dateList;
  }

  private generateDates() {

  }

}
