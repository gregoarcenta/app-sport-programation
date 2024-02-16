import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { ProgramationService } from '../../services/programation.service';
import { JsonPipe } from '@angular/common';
import { ItemDateComponent } from '../item-date/item-date.component';
import { IDate } from '../../../../core/interfaces/dates';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [JsonPipe, ItemDateComponent],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DatesComponent {
  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLElement>;

  programationService = inject(ProgramationService);

  constructor() {
    if (this.programationService.dates().length) return
    this.programationService.getDates().subscribe((response) => {
      this.programationService.dates.set(
        response.map((value) => {
          return { ...value, date: this.convertDate(value) };
        })
      );
    });
  }
  convertDate(obj: IDate): Date {
    const year = Number(obj.fecha.slice(0, 4));
    const month = Number(obj.fecha.slice(4, 6)) - 1;
    const day = Number(obj.fecha.slice(6, 8));

    return new Date(year, month, day);
  }

  horizontalScroll(e: WheelEvent) {
    e.preventDefault();
    this.scrollContainer!.nativeElement.scrollLeft += e.deltaY * 2;
  }

  scrollLeft(){
    this.scrollContainer!.nativeElement.scrollLeft += -500;
  }

  scrollRight(){
    this.scrollContainer!.nativeElement.scrollLeft += 500;
  }

}
