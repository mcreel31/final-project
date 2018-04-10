import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { TeamInfo } from './Team';
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TeamsService {
  private teamsUrl =  "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/conference_team_standings.json?teamstats=W,L,PTS,PTSA";
  constructor( private _http: HttpClient) { }

  getTeams(): Observable<TeamInfo.RootObject> {
    let result : any
    let head = new HttpHeaders();
    head = head.append("Authorization", "Basic " + btoa("mcreel31:FinalProject"));
    head = head.append("Content-Type", "application/json");
    return this._http.get<TeamInfo.RootObject>(this.teamsUrl, {headers: head})   
  }

}
