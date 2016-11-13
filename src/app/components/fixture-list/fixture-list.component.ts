import {Component, OnInit, Input} from '@angular/core';
import {Match} from "../../models";

@Component({
  selector: 'ft-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit {
  @Input() matches:Match[];
  constructor() { }

  ngOnInit() {
  }

}
