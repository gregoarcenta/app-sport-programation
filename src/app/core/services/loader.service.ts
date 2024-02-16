import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private activeRequests = signal(0);
  public active = signal<boolean>(false);

  show() {
    if (this.activeRequests() === 0) this.active.set(true);

    this.activeRequests.update((value) => value + 1);
  }

  hide() {
    this.activeRequests.update((value) => value - 1);

    if (this.activeRequests() === 0) this.active.set(false);
  }
}
