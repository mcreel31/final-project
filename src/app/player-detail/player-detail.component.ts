import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../players/player';
import { PlayersService } from '../players/players.service'

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  //players = [{"name": "John Wall"}, {"name": "Kevin Durant"}, {"name": "Kris Dunn"}]
  AllData : PlayerInfo.RootObject
  SelectedPlayer = 'Pick a player!'

  players : PlayerInfo.Player[]
  //@Input() players: PlayerInfo.Player[];
  
  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
    this._playersService.getPlayers()
    .subscribe(data => {
      this.AllData = data;
      this.players = this.AllData.cumulativeplayerstats.playerstatsentry.map(a => a.player)
    },
      error => console.log(error)
    );
  }

}
