import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { ProgramationService } from '../../services/programation.service';
import { JsonPipe } from '@angular/common';
import { CardGameComponent } from '../card-game/card-game.component';
import { IGame } from '../../../../core/interfaces/games';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [JsonPipe, CardGameComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent implements OnInit, OnDestroy {
  programationService = inject(ProgramationService);

  constructor() {
    if (this.programationService.games().length) return;
    this.programationService.getGames().subscribe((response) => {
      this.programationService.stadiums.set(this.getUniqueStadiums(response));
      this.programationService.dateSelected.set(new Date(response[1].fecha));
      this.programationService.stadiumSelected.set(response[1].nombreEstadio);
      this.programationService.games.set(response);
      this.programationService.putGamesSelected();
    });
  }
  ngOnInit(): void {
    this.programationService.putGamesSelected();
  }
  ngOnDestroy(): void {
    const response = this.programationService.games();
    this.programationService.dateSelected.set(new Date(response[1].fecha));
    this.programationService.stadiumSelected.set(response[1].nombreEstadio);
  }

  getUniqueStadiums(games: IGame[]): string[] {
    const stadiumSet = new Set<string>();

    games.forEach((game) => {
      stadiumSet.add(game.nombreEstadio);
    });

    return Array.from(stadiumSet);
  }
}
