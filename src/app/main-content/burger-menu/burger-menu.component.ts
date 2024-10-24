import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../services/burger-menu.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule, RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
  public translate = inject(TranslateService);
  public translationService = inject(TranslationService);

  constructor(
    public BurgerMenuService: BurgerMenuService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToElement(fragment);
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    // Warte, bis Angular den View aktualisiert hat, falls *ngIf verwendet wird
    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        const yOffset = -60;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        this.toggleMenu();
      } else {
        console.warn(`Element mit der ID ${sectionId} wurde nicht gefunden.`);
      }
    }, 100); // Delay einbauen, damit das Element gerendert wird
  }

  scrollToElement(elementId: string) {
    // Verwende den gleichen Scroll-Vorgang wie in scrollToSection
    this.scrollToSection(elementId);
  }

  toggleMenu() {
    this.BurgerMenuService.toggleMenu();
  }
}
