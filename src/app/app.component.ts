import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { LoaderService } from "./core/services/loader.service";
import { LayoutComponent } from "./layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  loaderService =  inject(LoaderService)
}
