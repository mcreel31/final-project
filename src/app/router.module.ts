import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';



// add routes here
const routes: Routes = [
  // sample below
  {path: 'dashboard', component: DashboardComponent },
  {path: 'teams', component: TeamsComponent },
  {path: 'players', component: PlayersComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
