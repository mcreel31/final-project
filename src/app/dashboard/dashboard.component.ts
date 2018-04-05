import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teams = [{"name": "Wizards"}, {"name": "Warriors"}, {"name": "Bulls"}]
  players = [{"name": "John Wall"}, {"name": "Kevin Durant"}, {"name": "Kris Dunn"}]
  constructor() { }


  ngOnInit() {
  }

}
