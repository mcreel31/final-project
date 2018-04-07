import { Component, OnInit } from '@angular/core';
import { Player } from '../players/player';
import { PlayersService } from '../players/players.service';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer: Player;

  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
    this._playersService.getPlayers()
      .subscribe(players  => {
        this.players = players;
      },
        error => console.log(error)
      );
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}
