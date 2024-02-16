import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProgramationService } from '../../services/programation.service';

@Component({
  selector: 'app-stadiums',
  standalone: true,
  imports: [],
  templateUrl: './stadiums.component.html',
  styleUrl: './stadiums.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StadiumsComponent {
  programationService = inject(ProgramationService);

  getClass(stadium: string): string {
    const stadiumSelected = this.programationService.stadiumSelected();

    if (!stadiumSelected) return 'btn-outline-success';

    return stadium === stadiumSelected ? 'btn-success' : 'btn-outline-success';
  }

  onChangeStadium(stadium: string) {
    this.programationService.stadiumSelected.set(stadium);
    this.programationService.putGamesSelected();
  }
}
