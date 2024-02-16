import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGame } from "../../../../core/interfaces/games";

@Component({
  selector: 'app-card-game',
  standalone: true,
  imports: [],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardGameComponent {
  @Input({required:true}) game!:IGame

  get imageLocal(){
    return `http://deportivo2.edbsharks.com/assets${this.game.rutaLogoLocal}`
  }

  get imageVisit(){
    return `http://deportivo2.edbsharks.com/assets${this.game.rutaLogoVisita}`
  }

  get defaultImage(): string {
    // Enlace a tu imagen por defecto
    return 'assets/default.jpg';
  }

  setDefaultImage(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }
}
