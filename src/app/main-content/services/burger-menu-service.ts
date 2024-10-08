import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BurgerMenuService {
  menuIsOpen: Boolean = false;
  menuClosedAtStart: boolean = true;
  isAnimation: boolean = false;

  toggleMenu() {
    this.isAnimation = !this.isAnimation;

    setTimeout(() => {
      this.menuClosedAtStart = false;
      this.menuIsOpen = !this.menuIsOpen;
    }, 100);
  }

  close() {
    if (this.menuIsOpen) {
      this.isAnimation = !this.isAnimation;

      setTimeout(() => {
        this.menuClosedAtStart = false;
        this.menuIsOpen = false;
      }, 100);
    }
  }
}
