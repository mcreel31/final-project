import { Component, OnInit } from '@angular/core';
import { Player } from '../players/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  player: Player = {
    id: 1,
    name: 'Michael Jordan',
    points: 43293
  };

  constructor() {}

  ngOnInit() {
  }

}
