import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class CalendarComponent {

}
