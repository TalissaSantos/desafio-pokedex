import { Component, Inject, OnInit } from '@angular/core';

import { Card } from 'src/app/core/interfaces/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  pokemonDetail!: Card;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Card) {}

  ngOnInit(): void {
    this.pokemonDetail = this.data.status;
  }
}
