import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatesComponent } from './components/dates/dates.component';
import { GamesComponent } from './components/games/games.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { SelectedDateComponent } from './components/selected-date/selected-date.component';
import { StadiumsComponent } from './components/stadiums/stadiums.component';

@Component({
  selector: 'app-programation',
  standalone: true,
  imports: [
    DatesComponent,
    GamesComponent,
    SelectedDateComponent,
    StadiumsComponent,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './programation.component.html',
  styleUrl: './programation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgramationComponent {
  constructor() {}
}
