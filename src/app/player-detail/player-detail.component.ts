import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  players = [{"name": "John Wall"}, {"name": "Kevin Durant"}, {"name": "Kris Dunn"}]
  
  constructor() { }

  ngOnInit() {
  }

}
