import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Player } from './player';
import { HttpBackend } from '@angular/common/http/src/backend';

@Injectable()
export class PlayersService {

  private playersUrl = 'https://www.mysportsfeeds.com/browse/nba/players';

  constructor( private _http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this._http.get<Player[]>(this.playersUrl);
  }

}
