import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnDestroy, OnInit {
  ngOnDestroy(): void {
    document.querySelector("body")!.style.overflow = "unset"

  }

  ngOnInit(): void {
    document.querySelector("body")!.style.overflow = "hidden"

  }
}
