import { Component, OnInit } from '@angular/core';
import { Game } from '../model/games.model';
import { Router } from '@angular/router';
import { GameService } from '../service/games.service'
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[];
  amount: any;
  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(data => { this.games = data });
    let ammt = localStorage.getItem("amt");
    this.amount = ammt.toString();
    this.amount = this.amount - 100;
    // alert(this.amount);
  }
  onSubmit() {

alert('thanks for playing');
    alert(  this.amount - 105)
  }

}
