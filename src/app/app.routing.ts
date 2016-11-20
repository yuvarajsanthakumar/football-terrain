import {RouterModule} from '@angular/router'
import {FixturesComponent, ResultsComponent,TeamsComponent,StandingsComponent } from './components';
import {FIXTURES_ROUTES} from "./components/fixtures/fixtures.routing";

export const FOOTBALL_TERRAIN_ROUTES =[
  {path: '', redirectTo: '/fixtures', pathMatch: 'full'},
  {path:'fixtures', component:FixturesComponent, children: FIXTURES_ROUTES},
  {path:'results', component:ResultsComponent},
  {path:'teams', component:TeamsComponent},
  {path:'standings', component:StandingsComponent},
  {path:'**', redirectTo: '/fixtures'}
];

export const FootballTerrainRouting = RouterModule.forRoot(FOOTBALL_TERRAIN_ROUTES);
