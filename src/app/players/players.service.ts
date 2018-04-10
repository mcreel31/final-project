import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { PlayerInfo } from './player';
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class PlayersService {
  private playersUrl =  "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/roster_players.json?fordate=20180328";
  constructor( private _http: HttpClient) { }

  getPlayers(): Observable<PlayerInfo.RootObject> {
    let result : any
    let head = new HttpHeaders();
    head = head.append("Authorization", "Basic " + btoa("mcreel31:FinalProject"));
    head = head.append("Content-Type", "application/json");
    return this._http.get<PlayerInfo.RootObject>(this.playersUrl, {headers: head})   
  }

}
