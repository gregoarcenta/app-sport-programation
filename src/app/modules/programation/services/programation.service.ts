import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IDate } from '../../../core/interfaces/dates';
import { IGame } from '../../../core/interfaces/games';

@Injectable({
  providedIn: 'root',
})
export class ProgramationService {
  http = inject(HttpClient);

  dateSelected = signal<Date | null>(null);
  stadiumSelected = signal<string | null>(null);
  gamesSelected = signal<IGame[]>([]);

  stadiums = signal<string[]>([]);
  dates = signal<IDate[]>([]);
  games = signal<IGame[]>([]);


  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>(
      `http://186.4.251.123:8083/deportivo/api/deportivo/calendario/fechas/0/1`
    );
  }

  getGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(
      `http://186.4.251.123:8083/deportivo/api/deportivo/programacion/2/0/0/0/0/20231216`
    );
  }

  scrollToDate(date: Date): void {
    const dateElement = document.getElementById(`${date}`);

    if (dateElement) {
      dateElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  putGamesSelected() {
    const dateSelected = this.dateSelected();
    const stadiumSelected = this.stadiumSelected();
    let gamesSelected = [];

    gamesSelected = this.games().filter((game) => {
      const newDate = new Date(game.fecha);

      return (
        dateSelected?.getTime() === newDate.getTime() &&
        stadiumSelected === game.nombreEstadio
      );
    });

    this.gamesSelected.set(gamesSelected);
  }
}
