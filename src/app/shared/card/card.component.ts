import { Component, Input, OnInit } from '@angular/core';

import { Card } from 'src/app/core/interfaces/card';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cards!: Card;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  modalDetail(pokemon: Card) {
    this.dialog.open(ModalComponent, {
      data: {
        types: pokemon.status.types[0]?.type.name,
        height: pokemon.status.height,
        name: pokemon.name,
        id: pokemon.status.id,
        abilities: pokemon.status.abilities[0].ability.name,
      },
    });
  }
}
