import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProgramationService } from '../../services/programation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-selected-date',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './selected-date.component.html',
  styleUrl: './selected-date.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SelectedDateComponent {
  programationService = inject(ProgramationService);
}
