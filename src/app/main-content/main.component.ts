import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { BurgerMenuService } from './services/burger-menu.service';
import { Router } from '@angular/router';
import { ScrollService } from './services/scroll.service';
import { debounceTime, fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SkillsMobileComponent } from './skills-mobile/skills-mobile.component';
import { TranslateService } from '@ngx-translate/core';
import { MyWorkMobileComponent } from './my-work-mobile/my-work-mobile.component';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { InFrontFooterComponent } from './in-front-footer/in-front-footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    SkillsMobileComponent,
    ContactComponent,
    MyWorkComponent,
    MyWorkMobileComponent,
    WhyMeComponent,
    FirstPageComponent,
    ReferencesComponent,
    FooterComponent,
    InFrontFooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  public isMobile: boolean = false;
  public isDesktop: boolean = false;
  public isExternSite: boolean = false;
  public animiationOne: boolean = false;
  public animiationMobile: boolean = false;
  scrollyToX: boolean = false;
  public scrollDistance: boolean = false;
  public burgerMenu = inject(BurgerMenuService);
  private translate = inject(TranslateService);

  constructor(private router: Router, private scrollService: ScrollService) {
    this.updateViewportSize();
    fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => this.updateViewportSize());
  }

  ngAfterViewInit() {
    this.scrollService.getScrollPosition().subscribe((position) => {
      this.scrollContainer.nativeElement.scrollTo({
        left: position,
        behavior: 'smooth',
      });
    });

    const container = this.scrollContainer.nativeElement;
    container.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('scroll', this.onScrollMobile.bind(this));
    container.addEventListener('wheel', this.onScrollY.bind(this));
  }

  onScroll(event: Event): void {
    const container = this.scrollContainer.nativeElement;
    const scrollLeft = container.scrollLeft;

    if (scrollLeft >= 3100) {
      this.animiationOne = true;
    } else if (scrollLeft <= 2900) {
      this.animiationOne = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScrollMobile(event: Event): void {
    const scrollTop = window.scrollY;

    if (scrollTop >= 1900) {
      this.animiationMobile = true;
    } else if (scrollTop <= 1700) {
      this.animiationMobile = false;
    }
  }

  onScrollY(event: WheelEvent) {
    if (this.scrollyToX) {
      event.preventDefault();
      const scrollSpeed = 3;
      const deltaX = event.deltaY * scrollSpeed;
      this.scrollContainer.nativeElement.scrollBy(deltaX, 0);
    }
  }

  updateViewportSize() {
    const width = window.innerWidth;
    this.isMobile = width <= 899;
    this.isDesktop = width >= 900;
    this.scrollyToX = width > 899;
  }
}
