import { Component, OnInit } from '@angular/core';
import { TeamInfo } from '../teams/team';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  AllData : TeamInfo.RootObject
  confarrs : TeamInfo.Team[][] = [];
  teams : TeamInfo.Team[] = []

  constructor(private _teamsService: TeamsService) { }

  ngOnInit() {
    this._teamsService.getTeams()
    .subscribe(data => {
       this.AllData = data;
       this.confarrs = this.AllData.conferenceteamstandings.conference.map(a => a.teamentry.map(x => x.team))
       this.teams = this.confarrs[0].concat(this.confarrs[1])
      },
       error => console.log(error)
     );
 }

}
