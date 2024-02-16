import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-positions',
  standalone: true,
  imports: [],
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class PositionsComponent {

}
