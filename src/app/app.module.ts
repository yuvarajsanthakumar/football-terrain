import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent,FixturesComponent,TeamsComponent,ResultsComponent,StandingsComponent } from './components';
import {FootballTerrainRouting} from "./app.routing";
import {APP_CONFIG, FOOTBALL_TERRAIN_CONFIG} from "./app.config";
import {FootballService} from "./services/football.service";
import { DateHeaderComponent } from './components/date-header/date-header.component';
import { FixtureListComponent } from './components/fixture-list/fixture-list.component';
import { FtDatePipe } from './pipes/ft-date.pipe';
import {DateService} from "./services/date.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FixturesComponent,
    TeamsComponent,
    ResultsComponent,
    StandingsComponent,
    DateHeaderComponent,
    FixtureListComponent,
    FtDatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FootballTerrainRouting
  ],
  providers: [
    { provide: APP_CONFIG, useValue: FOOTBALL_TERRAIN_CONFIG },
    FootballService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
