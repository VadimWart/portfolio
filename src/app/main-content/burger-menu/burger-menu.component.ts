import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../services/burger-menu.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule, RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  public translate = inject(TranslateService);
  public translationService = inject(TranslationService);

  constructor(
    public BurgerMenuService: BurgerMenuService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  scrollToSection(sectionId: string) {
    // Hole das Element anhand der ID
    const element = document.getElementById(sectionId);

    if (element) {
      // Führe den Scroll-Vorgang aus und passe den Offset manuell an
      let yOffset = -60; // Hier kannst du den Offset anpassen
      let y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Menü schließen
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.BurgerMenuService.toggleMenu();
  }
}
