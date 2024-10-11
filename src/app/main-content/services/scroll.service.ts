import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollPosition = new BehaviorSubject<number>(0);

  setScrollPosition(position: number) {
    this.scrollPosition.next(position);
  }

  getScrollPosition() {
    return this.scrollPosition.asObservable();
  }
}
