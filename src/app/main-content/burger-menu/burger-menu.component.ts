import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BurgerMenuService } from '../services/burger-menu.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule],
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

  toggleMenu() {
    this.BurgerMenuService.toggleMenu();
  }
}
