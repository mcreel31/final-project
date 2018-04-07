import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Player } from './player';
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class PlayersService {
  //private playersUrl = 'https://www.mysportsfeeds.com/browse/nba/players';
  //headers = this.headers.append("Authorization", "Basic " + btoa("mcreel:FinalProject")); 
  private playersUrl =  "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/roster_players.json?fordate=20180328";
  constructor( private _http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Basic" + btoa("mcreel31:FinalProject")
      })
    };
    console.log(this._http.get<Player[]>(this.playersUrl, httpOptions));
    return this._http.get<Player[]>(this.playersUrl);
  }

}
