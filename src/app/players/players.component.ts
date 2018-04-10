import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from '../players/player';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  //var that api data gets put into
  AllData : PlayerInfo.RootObject
  
  players: PlayerInfo.Player[] = [];
  selectedPlayer: PlayerInfo.Player;

  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
     this._playersService.getPlayers()
     .subscribe(data => {
        this.AllData = data;
        //this prints the entire blob of json returned from the api
        console.log(this.AllData)
        //this prints 'undefined'
        console.log(this.AllData.cumulativeplayerstats)
      },
        error => console.log(error)
      );
  }


  onSelect(player: PlayerInfo.Player): void {
    this.selectedPlayer = player;
  }

}
