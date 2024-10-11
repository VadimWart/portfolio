import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { BurgerMenuComponent } from '../../main-content/burger-menu/burger-menu.component';
import { BurgerMenuService } from '../../main-content/services/burger-menu-service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from '../../main-content/services/scroll-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeNav(arg0: number) {
    throw new Error('Method not implemented.');
  }
  fullStyle: boolean = true;
  showHeader: boolean = false;
  isMainPage: boolean = true;
  active: number | null = null;
  @Input() isDesktop!: boolean;
  public translate = inject(TranslateService);

  constructor(
    public BurgerMenuService: BurgerMenuService,
    private router: Router,
    private scrollService: ScrollService
  ) {
    this.checkUrl();
  }

  ngOnInit(): void {
    this.updateIsDesktop();
    window.addEventListener('resize', this.updateIsDesktop.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateIsDesktop.bind(this));
  }

  // Methode, um isDesktop basierend auf der Fenstergröße zu aktualisieren
  updateIsDesktop() {
    this.isDesktop = window.innerWidth >= 900; // 900px ist eine Beispielgröße für Desktop-Ansicht
  }

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }

  checkUrl() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showHeader =
          this.router.url === '/imprint' || this.router.url === '/privacy';
        if (this.showHeader) {
          this.isMainPage = false;
        }
      });
  }

  getDynamicStyle() {
    return this.isDesktop && this.fullStyle && !this.isMainPage
      ? { height: '100%' }
      : {};
  }
}
