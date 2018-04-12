import { Component, OnInit } from '@angular/core';
import { TeamInfo } from '../teams/team';
import { TeamLog } from '../teams/teamlog'
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  //varibales for selected team only
  AllData : TeamInfo.RootObject
  confarrs : TeamInfo.Team[][] = [];
  teams : TeamInfo.Team[] = []
  selectedTeam = 'Pick a team!'

  //variables for game log data of the selected team
  AllLogData : TeamLog.RootObject
  GamesLog : TeamLog.Gamelog[] = []


  constructor(private _teamsService: TeamsService) { }

  ngOnInit() {
    this._teamsService.getTeams()
    .subscribe(data => {
       this.AllData = data;
       this.confarrs = this.AllData.conferenceteamstandings.conference.map(a => a.teamentry.map(x => x.team))
       this.teams = this.confarrs[0].concat(this.confarrs[1])
       this.selectedTeam = this.teams[0].City + " " + this.teams[0].Name
       this.event()
      },
       error => console.log(error)
     );
 }
 event(){
  this._teamsService.getTeamsLogs(this.teams.find(i => i.City === this.selectedTeam.split(" ", 1)[0]).Abbreviation)
  .subscribe(data => {
     this.AllLogData = data;
     this.GamesLog = this.AllLogData.teamgamelogs.gamelogs
     let size = this.GamesLog.length
     if (size > 10) {
      this.GamesLog = this.GamesLog.slice(this.GamesLog.length-11, this.GamesLog.length-1)
     } else {
      this.GamesLog = this.GamesLog.slice(0, this.GamesLog.length-1)
     }
     
     console.log(this.GamesLog[0].stats)
    },
     error => console.log(error)
   );
 }
}
