import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../players/player';
import { PlayersService } from '../players/players.service'
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  //players = [{"name": "John Wall"}, {"name": "Kevin Durant"}, {"name": "Kris Dunn"}]
  AllData : PlayerInfo.RootObject
  SelectedPlayer : string = 'Pick a player!'
  GeneralInfo : PlayerInfo.Playerstatsentry
  JerseyNumber: string
  Position: string
  City: string
  TeamName: string

  players : PlayerInfo.Player[]
  //@Input() players: PlayerInfo.Player[];
  
  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
    this._playersService.getPlayers()
    .subscribe(data => {
      this.AllData = data;
      this.players = this.AllData.cumulativeplayerstats.playerstatsentry.map(a => a.player)
      this.SelectedPlayer = this.players[0].FirstName + " " + this.players[0].LastName
      this.GeneralInfo = this.AllData.cumulativeplayerstats.playerstatsentry
      .find(i => i.player.FirstName === 
        this.SelectedPlayer.split(" ", 2)[0] && i.player.LastName === this.SelectedPlayer.split(" ", 2)[1]);
    },
      error => console.log(error)
    );
  }

  event() {
   this.GeneralInfo = this.AllData.cumulativeplayerstats.playerstatsentry
   .find(i => i.player.FirstName === 
     this.SelectedPlayer.split(" ", 2)[0] && i.player.LastName === this.SelectedPlayer.split(" ", 2)[1]);
     this.JerseyNumber = this.GeneralInfo.player.JerseyNumber;
     this.Position = this.GeneralInfo.player.Position;
     this.City = this.GeneralInfo.team.City;
     this.TeamName = this.GeneralInfo.team.Name;
  }

}
