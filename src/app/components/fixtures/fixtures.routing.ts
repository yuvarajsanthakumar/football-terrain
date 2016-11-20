import {FixtureListComponent} from "../fixture-list/fixture-list.component";

import {Routes} from "@angular/router";
import {FixturesComponent} from "./fixtures.component";

export const FIXTURES_ROUTES: Routes = [
  { path: '', component: FixtureListComponent },
  { path: ':fixtures-id', component: FixtureListComponent }
];
