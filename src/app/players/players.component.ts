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
  players: PlayerInfo.Player[] = []
  last: number
  selectedPlayer: string = 'Pick a Player!'
  statistics: PlayerInfo.Playerstatsentry
  Position: string
  GamesPlayed: number
  Fg2ptatt: number
  Fg2ptmade: number
  Fg3ptatt: number
  Fg3ptmade: number
  Ftatt: number
  Ftmade: number
  Points: number;
  PPG: number;
  Fg2ptpct: number;
  Fg3ptpct: number;
  Ftpct: number;

  selectedPlayer2: string = 'Pick a Player!'
  statistics2: PlayerInfo.Playerstatsentry
  Position2: string
  GamesPlayed2: number
  Fg2ptatt2: number
  Fg2ptmade2: number
  Fg3ptatt2: number
  Fg3ptmade2: number
  Ftatt2: number
  Ftmade2: number
  Points2: number;
  PPG2: number;
  Fg2ptpct2: number;
  Fg3ptpct2: number;
  Ftpct2: number;


  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
     this._playersService.getPlayers()
     .subscribe(data => {
        this.AllData = data;
        this.players = this.AllData.cumulativeplayerstats.playerstatsentry.map(a => a.player)
        this.selectedPlayer = this.players[0].FirstName + " " + this.players[0].LastName
        this.statistics = this.AllData.cumulativeplayerstats.playerstatsentry
          .find(i => i.player.FirstName === 
        this.selectedPlayer.split(" ", 2)[0] && i.player.LastName === this.selectedPlayer.split(" ", 2)[1]);

        this.event();
        
      },
        error => console.log(error)
      );
      this._playersService.getPlayers()
     .subscribe(data => {
        this.AllData = data;
        this.players = this.AllData.cumulativeplayerstats.playerstatsentry.map(a => a.player)
        this.last = this.players.length-1
        this.selectedPlayer2 = this.players[this.last].FirstName + " " + this.players[this.last].LastName
        this.statistics2 = this.AllData.cumulativeplayerstats.playerstatsentry
          .find(i => i.player.FirstName === 
        this.selectedPlayer2.split(" ", 2)[0] && i.player.LastName === this.selectedPlayer2.split(" ", 2)[1]);

        this.event2();
        
      },
        error => console.log(error)
      );
  }


  event() {
    this.statistics = this.AllData.cumulativeplayerstats.playerstatsentry
          .find(i => i.player.FirstName === 
        this.selectedPlayer.split(" ", 2)[0] && i.player.LastName === this.selectedPlayer.split(" ", 2)[1]);
        this.GamesPlayed = Number(this.statistics.stats.GamesPlayed["#text"])
        this.Fg2ptatt = Number(this.statistics.stats.Fg2PtAtt["#text"])
        this.Fg2ptmade = Number(this.statistics.stats.Fg2PtMade["#text"])
        this.Fg3ptatt = Number(this.statistics.stats.Fg3PtAtt["#text"])
        this.Fg3ptmade = Number(this.statistics.stats.Fg3PtMade["#text"])
        this.Ftatt = Number(this.statistics.stats.FtAtt["#text"])
        this.Ftmade = Number(this.statistics.stats.FtMade["#text"])
        this.Points = (Number(this.statistics.stats.Fg2PtMade["#text"]) * 2)
        + (Number(this.statistics.stats.Fg3PtMade["#text"]) * 3) + Number(this.statistics.stats.FtMade["#text"])
        this.PPG = Math.round(this.Points / this.GamesPlayed * 10) / 10
        this.Fg2ptpct = Math.round(this.Fg2ptmade / this.Fg2ptatt * 100)
        this.Fg3ptpct = Math.round(this.Fg3ptmade / this.Fg3ptatt * 100)
        this.Ftpct = Math.round(this.Ftmade / this.Ftatt * 100)
  }


 event2() {
   this.statistics2 = this.AllData.cumulativeplayerstats.playerstatsentry
         .find(i => i.player.FirstName === 
       this.selectedPlayer2.split(" ", 2)[0] && i.player.LastName === this.selectedPlayer2.split(" ", 2)[1]);
       this.GamesPlayed2 = Number(this.statistics2.stats.GamesPlayed["#text"])
       this.Fg2ptatt2 = Number(this.statistics2.stats.Fg2PtAtt["#text"])
       this.Fg2ptmade2 = Number(this.statistics2.stats.Fg2PtMade["#text"])
       this.Fg3ptatt2 = Number(this.statistics2.stats.Fg3PtAtt["#text"])
       this.Fg3ptmade2 = Number(this.statistics2.stats.Fg3PtMade["#text"])
       this.Ftatt2 = Number(this.statistics2.stats.FtAtt["#text"])
       this.Ftmade2 = Number(this.statistics2.stats.FtMade["#text"])
       this.Points2 = (Number(this.statistics2.stats.Fg2PtMade["#text"]) * 2)
        + (Number(this.statistics2.stats.Fg3PtMade["#text"]) * 3) + Number(this.statistics2.stats.FtMade["#text"])
       this.PPG2 = Math.round(this.Points2 / this.GamesPlayed2 * 10) / 10
       this.Fg2ptpct2 = Math.round(this.Fg2ptmade2 / this.Fg2ptatt2 * 100)
       this.Fg3ptpct2 = Math.round(this.Fg3ptmade2 / this.Fg3ptatt2 * 100)
       this.Ftpct2 = Math.round(this.Ftmade2 / this.Ftatt2 * 100)
 }


}
