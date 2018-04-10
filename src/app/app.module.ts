import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRouterModule } from './router.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { PlayersService } from './players/players.service';
import { TeamsService } from './teams/teams.service'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    TeamsComponent,
    PlayersComponent,
    NotFoundComponent,
    PlayerDetailComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PlayersService,
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
