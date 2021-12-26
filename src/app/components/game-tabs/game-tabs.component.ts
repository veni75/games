import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/services/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  @Input() game: Game= {
    id: "",
    background_image: "",
    name: "",
    released: "",
    metacritic_url: "",
    website: "",
    description: "",
    metacritic: 0,
    genres: [],
    parent_platforms: [],
    publishers: [],
    ratings: [],
    screenshots: [],
    trailers: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
