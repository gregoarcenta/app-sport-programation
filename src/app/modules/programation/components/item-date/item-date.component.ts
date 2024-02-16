import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { IDate } from '../../../../core/interfaces/dates';
import { DatePipe } from '@angular/common';
import { ProgramationService } from '../../services/programation.service';

@Component({
  selector: 'app-item-date',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './item-date.component.html',
  styleUrl: './item-date.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDateComponent implements AfterViewInit {
  @Input({ required: true }) dateItem!: IDate;

  programationService = inject(ProgramationService);

  ngAfterViewInit (): void {
    const dateSelected = this.programationService.dateSelected();
    this.programationService.scrollToDate(dateSelected!);
  }

  onChangeDate(date: IDate) {
    this.programationService.dateSelected.set(new Date(date.date));
    this.programationService.putGamesSelected();
  }

  getClass(dateItem: IDate): string {
    const dateSelected = this.programationService.dateSelected();

    if (!dateSelected) return 'btn-outline-success';

    const isSameDate = this.areDatesEqual(dateSelected, dateItem.date);

    this.programationService.scrollToDate(dateSelected);

    return isSameDate ? 'btn-success' : 'btn-outline-success';
  }

  private areDatesEqual(date1: Date, date2: Date): boolean {
    const truncateTime = (date: Date) => {
      date.setHours(0, 0, 0, 0);
    };

    truncateTime(date1);
    truncateTime(date2);

    return date1.getTime() === date2.getTime();
  }
}
