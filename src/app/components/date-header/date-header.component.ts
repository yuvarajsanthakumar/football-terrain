import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FootballService} from "../../services/football.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'ft-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.css']
})
export class DateHeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Input() public from: Date;
  @Input() public to: Date;
  public dates: number[];

  constructor(public service: FootballService) {
  }

  ngOnInit() {
    this.subscription = this.service.loadFixtures().subscribe(
      fixtures => this.dates = fixtures.dateList
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private
  generateDates() {

  }

}
