import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  teams = [{"name": "Wizards"}, {"name": "Warriors"}, {"name": "Bulls"}, {"name": "Raptors"}]
  mySimpleModel = "Pick a team!"
  constructor() {}

  ngOnInit() {
  }

}
