import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/navbar/navbar';
import { Jogador } from '../shared/models/Jogador';
import { Card } from '../components/card/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Card, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'simulado-angular-Arthur';

  //Não consegui fazer os filtros :-:

  listaJogadores: Jogador[] = [
    new Jogador('Adriano', 41, 10, 'ATA', 'adriano.jpg'),
    new Jogador('Ronaldo', 45, 9, 'ATA', 'ronaldo.jpg'),
    new Jogador('Cristiano Ronaldo', 39, 7, 'ATA', 'cr7.jpg'),
    new Jogador('Balotelli', 34, 45, 'ATA', 'balotelli.jpg'),
    new Jogador('Seedorf', 48, 10, 'MEI', 'seedorf.jpg'),
    new Jogador('Renato', 44, 8, 'MEI', 'renato.jpg'),
    new Jogador('O Bruxo', 45, 10, 'MEI', 'bruxo.jpg'),
    new Jogador('Bebeto', 59, 20, 'ATA', 'bebeto.jpg'),
    new Jogador('Freky', 27, 13, 'ATA', 'freky.avif'),
    new Jogador('Catjam', 23, 17, 'MEI', 'catjam.avif'),
    new Jogador('Hackermans', 29, 4, 'ZAG', 'hackermans.avif'),
    new Jogador('Benzema', 38, 9, 'ATA', 'benzema.jpg'),
    new Jogador('Kahn', 56, 1, 'GOL', 'kahn.jpg'),
    new Jogador('Pelé', 82, 10, 'ATA', 'rei.jpg'),
    new Jogador('Buffon', 47, 1, 'GOL', 'buffon.jpg'),
    new Jogador('Roberto Carlos', 52, 6, 'LAT', 'r6.jpg'),
    new Jogador('Taffarel', 59, 12, 'GOL', 'taffarel.jpg'),
    new Jogador('Maradona', 63, 10, 'MEI', 'maradona.jpg'),
  ];

  timeEscalado: Jogador[] = [];

  escalarTime(Index: number): void {
    this.timeEscalado.push(this.listaJogadores[Index]);
    this.listaJogadores.splice(Index, 1);
    this.listaJogadores.sort((a, b) => (a.nome < b.nome ? -1 : 1));
  }

  devolverJogador(Index: number): void {
    this.listaJogadores.push(this.timeEscalado[Index]);
    this.timeEscalado.splice(Index, 1);
    this.listaJogadores.sort((a, b) => (a.nome < b.nome ? -1 : 1));
  }

  posFiltros = [
    {
      nome: 'GOL',
      selecionado: false,
    },
    {
      nome: 'ATA',
      selecionado: false,
    },
    {
      nome: 'MEI',
      selecionado: false,
    },
    {
      nome: 'LAT',
      selecionado: false,
    },
    {
      nome: 'ZAG',
      selecionado: false,
    },
  ];

  protected busca = '';

  get jogadoresFiltro() {
    let lista = this.listaJogadores;
    if (this.busca) {
      lista = lista.filter((j) =>
        j.nome.toLowerCase().includes(this.busca.toLowerCase())
      );
    }
    if (this.posFiltros.some((f) => f.selecionado)) {
      lista = lista.filter((j) =>
        this.posFiltros.some((f) => f.nome === j.posicao && f.selecionado)
      );
    }
    if (this.timeEscalado.length > 0)
      lista = lista.filter((j) => !this.timeEscalado.includes(j));
    {
      return lista;
    }
  }
}
