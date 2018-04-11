import { Component, OnInit, NgModule } from '@angular/core';
import { TeamsService } from '../teams/teams.service'
import { TeamInfo } from '../teams/team';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  //teams = [{"name": "Atlanta Hawks"}, {"name": "Boston Celtics"}, {"name": "Bulls"}, {"name": "Raptors"}]
  AllData : TeamInfo.RootObject
  confarrs : TeamInfo.Team[][] = []
  teams : TeamInfo.Team[] = []
  selectedTeam : string = 'Pick a team!'
  TeamGeneralInfo: TeamInfo.Teamentry
  AllTeamEntry: TeamInfo.Teamentry[] = []
  Abbreviation: string
  Rank: string
  Wins: string
  Losses: string

  constructor(private _teamsService: TeamsService) { }

  ngOnInit() {
    this._teamsService.getTeams()
    .subscribe(data => {
       this.AllData = data;
       this.confarrs = this.AllData.conferenceteamstandings.conference.map(a => a.teamentry.map(x => x.team))
       this.teams = this.confarrs[0].concat(this.confarrs[1])
       this.selectedTeam = this.teams[0].City + " " + this.teams[0].Name;
      //  this.AllTeamEntry = this.AllData.conferenceteamstandings.conference[0].teamentry
      //  .concat(this.AllData.conferenceteamstandings.conference[1].teamentry)
      //  .find(i => i.name === this.selectedTeam[0]);
      },
       error => console.log(error)
     );
 }

 event() {
   /*
    this.TeamGeneralInfo = this.AllData.conferenceteamstandings.conference
       .find(i => i.name === this.selectedTeam[0]);
    this.Abbreviation = this.TeamGeneralInfo.;
    this.Rank = this.TeamGeneralInfo.;
    this.Wins = this.TeamGeneralInfo.;
    this.Losses = this.TeamGeneralInfo.;
    */
    
 }

}
