import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interfaces/card';
import { PokedexService } from 'src/app/core/services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokedexService.getListAllPokemons().subscribe(
      (res) => {
        this.cards = res.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
