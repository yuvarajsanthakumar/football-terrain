import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent,FixturesComponent,TeamsComponent,ResultsComponent,StandingsComponent } from './components';
import {FootballTerrainRouting} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FixturesComponent,
    TeamsComponent,
    ResultsComponent,
    StandingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FootballTerrainRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
