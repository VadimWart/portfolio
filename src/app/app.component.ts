import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BurgerMenuService } from './main-content/services/burger-menu-service';
import { Title } from '@angular/platform-browser';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ImprintComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isMobile: boolean = false;
  public isDesktop: boolean = false;
  public isExternSite: boolean = false;
  public animiationOne: boolean = false;
  public burgerMenu = inject(BurgerMenuService);
  public translate = inject(TranslateService);
  title = 'portfoliopms';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Vadim Wart');
    this.updateViewportSize();
    fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => this.updateViewportSize());
  }

  updateViewportSize() {
    const width = window.innerWidth;
    this.isMobile = width <= 899;
    this.isDesktop = width >= 900;
  }
}
