import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Jogador } from '../../shared/models/Jogador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) jogador!: Jogador;

  @Output() escalar = new EventEmitter<void>();
}
