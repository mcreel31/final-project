import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../players/player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  //players = [{"name": "John Wall"}, {"name": "Kevin Durant"}, {"name": "Kris Dunn"}]

  @Input() player: PlayerInfo.Player;
  
  constructor() { }

  ngOnInit() {
  }

}
